#!/usr/bin/env python
import paramiko

hostname = "127.0.0.1"
port = 22
username = "kali"
password = "kali"


def do_it():
    with paramiko.SSHClient() as s:
        s.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        s.connect(hostname, port, username, password)
        command = "ls -la"
        stdin, stdout, stderr = s.exec_command(command)
        for line in stdout.readlines():
            print(line)


if __name__ == "__main__":
    do_it()
