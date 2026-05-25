import urllib.request

urls = {
    'src/assets/paper_clips/logos/deccan_chronicle.png': 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Deccan_Chronicle_Logo.png',
    'src/assets/paper_clips/logos/the_hans_india.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/%E0%A4%A6_%E0%A4%B9%E0%A4%82%E0%A4%B8_%E0%A4%87%E0%A4%82%E0%A4%A1%E0%A4%BF%E0%A4%AF%E0%A4%BE_%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B.png/320px-%E0%A4%A6_%E0%A4%B9%E0%A4%82%E0%A4%B8_%E0%A4%87%E0%A4%82%E0%A4%A1%E0%A4%BF%E0%A4%AF%E0%A4%BE_%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B.png'
}

for path, url in urls.items():
    print(f"Downloading {url} to {path}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'})
        with urllib.request.urlopen(req) as response, open(path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
        print("Success.")
    except Exception as e:
        print("Error:", e)
