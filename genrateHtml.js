const fs = require('fs');
const path = require('path');
const pug = require('pug');

const projectDir = path.join(__dirname);
const templatePath = path.join(__dirname, 'main-template.pug');

async function generateProjectPage() {
	const projects = [];
	const projectFolders = fs.readdirSync(projectDir);

	for (const folderName of projectFolders) {
		if (!folderName.startsWith('.')) {
			const projectPath = path.join('./', folderName);
			const previewImage = path.join(projectPath, 'design/desktop-preview.jpg');

			if (fs.existsSync(previewImage)) {
				projects.push({
					name: folderName,
					imageUrl: previewImage,
				});
			}
		}
	}

	const compiledTemplate = pug.compileFile(templatePath);
	const htmlContent = compiledTemplate({ projects });
	fs.writeFileSync('index.html', htmlContent);
}

generateProjectPage().catch((error) => {
	console.error('Error generating project page:', error);
});
