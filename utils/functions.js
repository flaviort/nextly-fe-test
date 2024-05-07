// debounce function
export function debounce(func, delay) {
    let timeoutId;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// format date in US format (MM/DD/YYYY)
export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        timeZone: 'UTC',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })
}

// format the date and only get the day showing always 2 digits
export function getDay(day) {
    return new Date(day).toLocaleDateString('en-US', {
        timeZone: 'UTC',
        day: '2-digit'
    })
}

// format the date and show only the written month
export function getMonth(month) {
    return new Date(month).toLocaleDateString('en-US', {
        timeZone: 'UTC',
        month: 'long'
    })
}

// format the date and show only the year
export function getYear(year) {
    return new Date(year).toLocaleDateString('en-US', {
        timeZone: 'UTC',
        year: 'numeric'
    })
}

// remove all special characters from phone (to use in href='tel:')
export function phone(str) {
	return (
		'tel:' + str.replace(/[^0-9]/g, '')
	)
}

// simple function to use along <a href='mailto:'>
export function email(str) {
	return (
		'mailto:' + str
	)
}

// slugify
export function slugify(str) {
    return String(str)
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

// calc vw / vh
export const vw = (coef) => window.innerWidth * (coef/100)
export const vh = (coef) => window.innerHeight * (coef/100)

// limit characters
export function limitCharacters(text, limit) {
    if (text.length <= limit) {
        return text
    } else {
        return text.slice(0, limit) + '...'
    }
}