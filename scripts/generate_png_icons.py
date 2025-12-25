import os
import zlib
import struct

def write_png(path, width, height, rgba):
    # rgba: tuple of 4 ints 0-255
    def png_chunk(chunk_type, data):
        chunk = struct.pack('>I', len(data)) + chunk_type + data
        crc = struct.pack('>I', (zlib.crc32(chunk_type + data) & 0xffffffff))
        return chunk + crc

    signature = b"\x89PNG\r\n\x1a\n"
    ihdr = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    idat_raw = b''
    # build raw image data: each row starts with 0 filter byte then pixels
    row = bytes([0]) + bytes(rgba) * width
    idat_raw = row * height
    idat = zlib.compress(idat_raw)
    iend = b''

    with open(path, 'wb') as f:
        f.write(signature)
        f.write(png_chunk(b'IHDR', ihdr))
        f.write(png_chunk(b'IDAT', idat))
        f.write(png_chunk(b'IEND', iend))

if __name__ == '__main__':
    os.makedirs('icons', exist_ok=True)
    # Pink color #ff4d88 -> (255,77,136,255)
    rgba = (255,77,136,255)
    write_png('icons/icon-192.png', 192, 192, rgba)
    write_png('icons/icon-512.png', 512, 512, rgba)
    print('Icons written to icons/icon-192.png and icons/icon-512.png')