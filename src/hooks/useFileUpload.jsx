'use client';

import { useState } from 'react';

export function useFileUpload(initialFiles = []) {
	const [files, setFiles] = useState(initialFiles);

	const addFiles = (newFiles) => setFiles((prev) => [...prev, ...newFiles]);
	const removeFile = (index) =>
		setFiles((prev) => prev.filter((_, i) => i !== index));

	return { files, addFiles, removeFile };
}
