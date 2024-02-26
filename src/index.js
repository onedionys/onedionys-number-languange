function realFormatNumberLanguange(number, lang) {
    number = Math.abs(number);
    const indonesian = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
    const english = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const englishTens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    let words = indonesian;
    let temp = "";

    if (lang === 'en') {
        words = english;

        if (number < 20) {
            temp = " " + words[number];
        } else if (number < 100) {
            temp = englishTens[Math.floor(number / 10)];
            if (number % 10 !== 0) {
                temp += "-" + words[number % 10];
            }
        } else if (number < 1000) {
            temp = words[Math.floor(number / 100)] + " Hundred" + (number % 100 !== 0 ? " " + realFormatNumberLanguange(number % 100, lang) : "");
        } else if (number < 1000000) {
            temp = realFormatNumberLanguange(Math.floor(number / 1000), lang) + " Thousand" + (number % 1000 !== 0 ? " " + realFormatNumberLanguange(number % 1000, lang) : "");
        } else if (number < 1000000000) {
            temp = realFormatNumberLanguange(Math.floor(number / 1000000), lang) + " Million" + (number % 1000000 !== 0 ? " " + realFormatNumberLanguange(number % 1000000, lang) : "");
        } else if (number < 1000000000000) {
            temp = realFormatNumberLanguange(Math.floor(number / 1000000000), lang) + " Billion" + (number % 1000000000 !== 0 ? " " + realFormatNumberLanguange(number % 1000000000, lang) : "");
        } else if (number < 1000000000000000) {
            temp = realFormatNumberLanguange(Math.floor(number / 1000000000000), lang) + " Trillion" + (number % 1000000000000 !== 0 ? " " + realFormatNumberLanguange(number % 1000000000000, lang) : "");
        }
    }else {
        if (number < 12) {
            temp = " " + words[number];
        } else if (number < 20) {
            temp = realFormatNumberLanguange(number - 10, lang) + " Belas";
        } else if (number < 100) {
            temp = realFormatNumberLanguange(Math.floor(number / 10), lang) + " Puluh " + realFormatNumberLanguange(number % 10, lang);
        } else if (number < 200) {
            temp = "Seratus " + realFormatNumberLanguange(number - 100, lang);
        } else if (number < 1000) {
            temp = realFormatNumberLanguange(Math.floor(number / 100), lang) + " Ratus " + realFormatNumberLanguange(number % 100, lang);
        } else if (number < 2000) {
            temp = "Seribu " + realFormatNumberLanguange(number - 1000, lang);
        } else if (number < 1000000) {
            temp = realFormatNumberLanguange(Math.floor(number / 1000), lang) + " Ribu " + realFormatNumberLanguange(number % 1000, lang);
        } else if (number < 1000000000) {
            temp = realFormatNumberLanguange(Math.floor(number / 1000000), lang) + " Juta " + realFormatNumberLanguange(number % 1000000, lang);
        } else if (number < 1000000000000) {
            temp = realFormatNumberLanguange(Math.floor(number / 1000000000), lang) + " Milyar " + realFormatNumberLanguange(number % 1000000000, lang);
        } else if (number < 1000000000000000) {
            temp = realFormatNumberLanguange(Math.floor(number / 1000000000000), lang) + " Trilyun " + realFormatNumberLanguange(number % 1000000000000, lang);
        }
    }

    return temp.trim();
}

function formatNumberLanguange(number, lang, type = 'Rupiah') {
    return realFormatNumberLanguange(number, lang) + ' ' + type;
}

module.exports = { formatNumberLanguange };
