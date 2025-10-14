def number_of_files(file_size, file_unit, drive_size_gb):
    
    return int(drive_size_gb / (
        file_size / 1000 if file_unit == "MB" 
        else file_size / 1000000 if file_unit == "KB" 
        else file_size / 1000000000))

print(number_of_files(500, "KB", 1))
print(number_of_files(50000, "B", 1))
print(number_of_files(5, "MB", 1))
print(number_of_files(4096, "B", 1.5))
print(number_of_files(220.5, "KB", 100))
print(number_of_files(4.5, "MB", 750))