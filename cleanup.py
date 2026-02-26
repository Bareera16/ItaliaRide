import os
import shutil

def cleanup(base_dir):
    if not os.path.exists(base_dir):
        return
    for item in os.listdir(base_dir):
        item_path = os.path.join(base_dir, item)
        if os.path.isdir(item_path) and item != "[slug]":
            print(f"Deleting {item_path}")
            shutil.rmtree(item_path)

cleanup("src/app/city")
cleanup("src/app/airport")

# Also cleanup old directories
legacy_dirs = ["src/app/city-transfer", "src/app/airport-transfer"]
for ld in legacy_dirs:
    if os.path.exists(ld):
        print(f"Deleting legacy dir {ld}")
        shutil.rmtree(ld)
