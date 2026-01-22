#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>
#include <signal.h>

#define MAX_INPUT_SIZE 1024
#define MAX_ARGS 64

pid_t bg_pids[100];
int bg_count = 0;
pid_t fg_pid = -1;


void handle_sigint(int sig) {
    printf("\nBackground processes:\n");
    for (int i = 0; i < bg_count; i++) {
        printf("PID: %d\n", bg_pids[i]);
    }
    printf("# ");
    fflush(stdout);
}


void handle_sigtstp(int sig) {
    if (fg_pid > 0) {
        kill(fg_pid, SIGTSTP);
        printf("\nForeground process %d stopped\n", fg_pid);
    }
    printf("# ");
    fflush(stdout);
}

int main() {
    char input[MAX_INPUT_SIZE];

    signal(SIGINT, handle_sigint);
    signal(SIGTSTP, handle_sigtstp);

    while (1) {
        printf("# ");
        fflush(stdout);

        if (fgets(input, MAX_INPUT_SIZE, stdin) == NULL) {
            printf("\nExiting shell...\n");
            break;
        }

        input[strcspn(input, "\n")] = '\0';

        char *argv[MAX_ARGS];
        int argc = 0;

        char *token = strtok(input, " ");
        while (token != NULL && argc < MAX_ARGS - 1) {
            argv[argc++] = token;
            token = strtok(NULL, " ");
        }
        argv[argc] = NULL;

        int background = 0;
        if (argc > 0 && strcmp(argv[argc - 1], "&") == 0) {
            background = 1;
            argv[argc - 1] = NULL;
            argc--;
        }

        if (argc == 0)
            continue;

        if (strcmp(argv[0], "exit") == 0) {
            printf("Exiting shell...\n");
            break;
        }

        if (strcmp(argv[0], "cd") == 0) {
            if (argv[1] == NULL)
                printf("cd: missing argument\n");
            else if (chdir(argv[1]) != 0)
                perror("cd");
            continue;
        }

        if (strcmp(argv[0], "pwd") == 0) {
            char cwd[1024];
            if (getcwd(cwd, sizeof(cwd)) != NULL)
                printf("%s\n", cwd);
            else
                perror("pwd");
            continue;
        }

        pid_t pid = fork();

        if (pid < 0) {
            perror("fork");
            continue;
        }

        if (pid == 0) {
            if (execvp(argv[0], argv) == -1) {
                perror("execvp");
                exit(1);
            }
        } else {
            if (!background) {
                int status;
                fg_pid = pid;
                waitpid(pid, &status, 0);
                fg_pid = -1;
            } else {
                
                bg_pids[bg_count++] = pid;
                printf("[Background process started] PID: %d\n", pid);
            }
        }
    }

    return 0;
}
