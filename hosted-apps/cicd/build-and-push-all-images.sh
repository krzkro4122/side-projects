#!/bin/bash

SECONDS=0

build_and_push() {
    pushd ../$1
    docker build --platform linux/arm64/v8 -t layor/$1:latest . && \
    docker push layor/$1:latest
    popd
}

images_to_build=(
    # "goofy-slider"
    # "todo"
    "cursum"
    # "moomin-chaser"
    # "tic-tac-toe"
)

for image in "${images_to_build[@]}"; do
    echo "Building and pushing $image"
    build_and_push $image
    echo "$image done! Took: $((SECONDS / 60))m $((SECONDS % 60))s"
done

echo "All done! Took: $((SECONDS / 60))m $((SECONDS % 60))s"
