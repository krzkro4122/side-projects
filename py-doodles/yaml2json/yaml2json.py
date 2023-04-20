import json
import yaml
import os


def ls(path: str, inlcuded: str = None):
    return os.listdir(path)



def main():
    print(ls('../..'))

if __name__ == "__main__":
    main()