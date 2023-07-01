import json
import yaml
import sys
import os


def ls(path: str, inlcuded: str = None):
    return os.listdir(path)


def parse_yaml_file(file_path: str):
    with open(file_path, 'r') as f:
        return yaml.full_load(f)


def parse_json_file(file_path: str):
    with open(file_path, 'r') as f:
        return json.load(f)


def write_json_file(output_file_path: str, data: dict):
    with open(output_file_path, 'w') as f:
        json.dump(data, f, indent=4)


def write_yaml_file(output_file_path: str, data: dict):
    with open(output_file_path, 'w') as f:
        yaml.dump(data, f)


def crawl(directory: str):
    files = ls(directory)
    for file in files:
        file_path = os.path.join(directory, file)
        if file.endswith('.yaml'):
            data = parse_yaml_file(file_path)
            output_file_path = os.path.join(
                os.path.dirname(file_path),
                'output',
                os.path.basename(file_path)
            )
            output_file_path = output_file_path.replace('.yaml', '.json')
            write_json_file(output_file_path, data)
        elif file.endswith('.json'):
            data = parse_json_file(file_path)
            output_file_path = os.path.join(
                os.path.dirname(file_path),
                'output',
                os.path.basename(file_path)
            )
            output_file_path = output_file_path.replace('.json', '.yaml')
            write_yaml_file(output_file_path, data)
        else:
            continue


def main():
    directory = sys.argv[1]
    crawl(directory)


if __name__ == "__main__":
    main()
