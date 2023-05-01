import os

path = 'E:\\Project\\Undangan Online\\New\\assets\\images\\galeri'
files = os.listdir(path)

for i, file_name in enumerate(files):
    ext = os.path.splitext(file_name)[1]

    new_file_name = str(i+1) + ext

    os.rename(os.path.join(path, file_name), os.path.join(path, new_file_name))
