'use client';

import { useState } from 'react';

export function useFileUpload(initialFiles = []) {
	const [files, setFiles] = useState(initialFiles);

	const addFiles = (newFiles) => {
		const fileWithMeta = newFiles.map((file, i) => ({
			file,
			isMain: files.length === 0 && i === 0,
		}));
		setFiles((prev) => [...prev, ...fileWithMeta]);
	};

	const removeFile = (index) =>
		setFiles((prev) => prev.filter((_, i) => i !== index));

	const setAsMain = (index) => {
		setFiles((prev) =>
			prev.map((item, i) => ({
				...item,
				isMain: i === index,
			})),
		);
	};

	const moveFile = (from, to) => {
		setFiles((prev) => {
			const upload = [...prev];
			const [moved] = upload.splice(from, 1);
			upload.splice(to, 0, moved);
			return upload;
		});
	};

	return { files, addFiles, removeFile, setAsMain, moveFile };
}
