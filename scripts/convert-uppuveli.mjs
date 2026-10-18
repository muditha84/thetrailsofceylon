import sharp from 'sharp';

const input = 'C:/Users/mudit/Downloads/uppuveli.jpg';
const output = 'C:/Users/mudit/thetrailsofceylon/public/images/uppuveli.webp';

const info = await sharp(input).webp({ quality: 82 }).toFile(output);
console.log(`Done: ${info.width}x${info.height}px  ${Math.round(info.size/1024)}KB → ${output}`);
