const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '..', 'public', 'galeria');
const outputJsonPath = path.join(__dirname, '..', 'src', 'gallery-data.json');

function generateGalleryData() {
    const galleryData = [];
    try {
        const itemDirs = fs.readdirSync(galleryDir, { withFileTypes: true })
                           .filter(dirent => dirent.isDirectory())
                           .map(dirent => dirent.name);

        for (const dirName of itemDirs) {
            const itemPath = path.join(galleryDir, dirName);
            const parts = dirName.match(/^([a-z0-9-]+?)-(.+)$/i);
            if (!parts) {
                console.warn(`Skipping directory with invalid name format: ${dirName}`);
                continue;
            }
            const category = parts[1];
            const id = dirName; // Use the full directory name as ID for simplicity

            const titlePath = path.join(itemPath, 'title.txt');
            const descPath = path.join(itemPath, 'desc.txt');

            let title = '';
            let description = '';

            try {
                if (fs.existsSync(titlePath)) {
                    title = fs.readFileSync(titlePath, 'utf-8').trim();
                }
                if (fs.existsSync(descPath)) {
                    description = fs.readFileSync(descPath, 'utf-8').trim();
                }
            } catch (err) {
                console.error(`Error reading text files in ${dirName}:`, err);
            }

            let images = [];
            try {
                images = fs.readdirSync(itemPath)
                           .filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file))
                           .sort() // Sort alphabetically
                           .map(file => `/galeria/${dirName}/${file}`); // Relative path for web access
            } catch (err) {
                console.error(`Error reading image files in ${dirName}:`, err);
            }

            if (images.length > 0) {
                galleryData.push({
                    id,
                    category,
                    title,
                    description,
                    images,
                    thumbnail: images[0], // Use the first image as thumbnail
                });
            } else {
                console.warn(`Skipping directory with no images: ${dirName}`);
            }
        }

        fs.writeFileSync(outputJsonPath, JSON.stringify(galleryData, null, 2));
        console.log(`Gallery data successfully generated at ${outputJsonPath}`);

    } catch (error) {
        if (error.code === 'ENOENT' && error.path === galleryDir) {
            console.warn(`Gallery directory not found: ${galleryDir}. Creating empty data file.`);
            fs.writeFileSync(outputJsonPath, JSON.stringify([], null, 2));
        } else {
            console.error('Error generating gallery data:', error);
            process.exit(1); // Exit with error code if something else went wrong
        }
    }
}

generateGalleryData();

