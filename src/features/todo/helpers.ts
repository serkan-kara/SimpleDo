export const parseDate = (date: string) => {
	if (!date) {
		return;
	}

	var dateObj = new Date(date);
	var month = dateObj.getUTCMonth() + 1;
	var day = dateObj.getUTCDate();
	var year = dateObj.getUTCFullYear();

	return `${day}/${month}/${year}`;
};
