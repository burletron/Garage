
import dropbox


# Замените на свои значения
ACCESS_TOKEN = 'sl.BoLI6yq8AtEVojzpo5bYAfxB6j7T92xkk8uwGhZKyzyRq1wC3n6bX9o0r3fq24S2--SmzSqW71Z-tSzgK06z0ofSb1x8XouNSXrVcXuO3T-RDkpSsoLdrAHUq-P35b7jEQeopb3QgJ2n'
FILE_PATH = 'C:\Users\User\Dropbox/news_1.docx'  # Путь к файлу в Dropbox

@# Инициализация клиента Dropbox
dbx = dropbox.Dropbox(ACCESS_TOKEN)

def download_file_content(dbx, file_path):
    try:
        # Скачиваем содержимое файла
        metadata, response = dbx.files_download(file_path)

        # Декодируем содержимое файла в текст
        file_content = response.content.decode('utf-8')

        return file_content

    except dropbox.exceptions.HttpError as err:
        print("Ошибка скачивания файла:", err)
        return None

# Получаем содержимое файла
file_content = download_file_content(dbx, FILE_PATH)

# Выводим содержимое файла
print("Содержимое файла:")
print(file_content)