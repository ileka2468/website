import os

path = r'./'

files = os.listdir(path)

print(files)

for file in files:

    if file not in [".idea", "files.py"]:
        period = file.find(".")
        extension = file[period:].upper()
        # print(extension)

        if extension not in [".MP4", ".MOV"]:
            print(f'<li><a class="ns-img" href="img/{file}"></a><div class="caption cap1">Something</div></li>')
        else:
            print(f"deleting video {file}")
            os.remove(file)
    else:
        pass



