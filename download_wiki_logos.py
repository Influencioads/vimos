import urllib.request
import re

def get_wiki_logo(url, out_path):
    print(f'Fetching {url}...')
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'<img[^>]+class=[\"\']infobox-image[^>]*src=[\"\'](//upload\.wikimedia\.org/wikipedia/en/thumb/[^\"\']+)[\"\']', html)
        if not match:
            match = re.search(r'<table class=[\"\']infobox.*?<img[^>]+src=[\"\'](//upload\.wikimedia\.org/[^\"\']+)[\"\']', html, re.DOTALL)
        if match:
            img_url = 'https:' + match.group(1)
            if 'thumb' in img_url:
                img_url = img_url.replace('/thumb/', '/').rsplit('/', 1)[0]
            print('Found URL:', img_url)
            img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with open(out_path, 'wb') as f:
                f.write(urllib.request.urlopen(img_req).read())
            print('Saved to', out_path)
        else:
            print('No logo found for', url)
    except Exception as e:
        print('Error:', e)

get_wiki_logo('https://en.wikipedia.org/wiki/Deccan_Chronicle', 'src/assets/paper_clips/logos/deccan_chronicle.png')
get_wiki_logo('https://en.wikipedia.org/wiki/The_Hans_India', 'src/assets/paper_clips/logos/the_hans_india.png')
