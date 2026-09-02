
// // import Switch from '@mui/material/Switch';

// // import Box from '@mui/material/Box';
// // import Fab from '@mui/material/Fab';
// // import AddIcon from '@mui/icons-material/Add';
// // import EditIcon from '@mui/icons-material/Edit';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// // import NavigationIcon from '@mui/icons-material/Navigation';


// // import TextField from '@mui/material/TextField';
// // import Autocomplete from '@mui/material/Autocomplete';


// // import Box from '@mui/material/Box';
// // import TextField from '@mui/material/TextField';
// // import Autocomplete from '@mui/material/Autocomplete';


// import { useState } from "react";

// import * as React from 'react';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



// // const label = { slotProps: { input: { 'aria-label': 'Switch demo' } } };





// function ModalsMui() {





//     // const top100Films = [
//     //     { label: 'The Shawshank Redemption', year: 1994 },
//     //     { label: 'The Godfather', year: 1972 },
//     //     { label: 'The Godfather: Part II', year: 1974 },
//     //     { label: 'The Dark Knight', year: 2008 },
//     //     { label: '12 Angry Men', year: 1957 },
//     //     { label: "Schindler's List", year: 1993 },
//     //     { label: 'Pulp Fiction', year: 1994 },
//     //     {
//     //         label: 'The Lord of the Rings: The Return of the King',
//     //         year: 2003,
//     //     },
//     //     { label: 'The Good, the Bad and the Ugly', year: 1966 },
//     //     { label: 'Fight Club', year: 1999 },
//     //     {
//     //         label: 'The Lord of the Rings: The Fellowship of the Ring',
//     //         year: 2001,
//     //     },
//     //     {
//     //         label: 'Star Wars: Episode V - The Empire Strikes Back',
//     //         year: 1980,
//     //     },
//     //     { label: 'Forrest Gump', year: 1994 },
//     //     { label: 'Inception', year: 2010 },
//     //     {
//     //         label: 'The Lord of the Rings: The Two Towers',
//     //         year: 2002,
//     //     },
//     //     { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
//     //     { label: 'Goodfellas', year: 1990 },
//     //     { label: 'The Matrix', year: 1999 },
//     //     { label: 'Seven Samurai', year: 1954 },
//     //     {
//     //         label: 'Star Wars: Episode IV - A New Hope',
//     //         year: 1977,
//     //     },
//     //     { label: 'City of God', year: 2002 },
//     //     { label: 'Se7en', year: 1995 },
//     //     { label: 'The Silence of the Lambs', year: 1991 },
//     //     { label: "It's a Wonderful Life", year: 1946 },
//     //     { label: 'Life Is Beautiful', year: 1997 },
//     //     { label: 'The Usual Suspects', year: 1995 },
//     //     { label: 'Léon: The Professional', year: 1994 },
//     //     { label: 'Spirited Away', year: 2001 },
//     //     { label: 'Saving Private Ryan', year: 1998 },
//     //     { label: 'Once Upon a Time in the West', year: 1968 },
//     //     { label: 'American History X', year: 1998 },
//     //     { label: 'Interstellar', year: 2014 },
//     //     { label: 'Casablanca', year: 1942 },
//     //     { label: 'City Lights', year: 1931 },
//     //     { label: 'Psycho', year: 1960 },
//     //     { label: 'The Green Mile', year: 1999 },
//     //     { label: 'The Intouchables', year: 2011 },
//     //     { label: 'Modern Times', year: 1936 },
//     //     { label: 'Raiders of the Lost Ark', year: 1981 },
//     //     { label: 'Rear Window', year: 1954 },
//     //     { label: 'The Pianist', year: 2002 },
//     //     { label: 'The Departed', year: 2006 },
//     //     { label: 'Terminator 2: Judgment Day', year: 1991 },
//     //     { label: 'Back to the Future', year: 1985 },
//     //     { label: 'Whiplash', year: 2014 },
//     //     { label: 'Gladiator', year: 2000 },
//     //     { label: 'Memento', year: 2000 },
//     //     { label: 'The Prestige', year: 2006 },
//     //     { label: 'The Lion King', year: 1994 },
//     //     { label: 'Apocalypse Now', year: 1979 },
//     //     { label: 'Alien', year: 1979 },
//     //     { label: 'Sunset Boulevard', year: 1950 },
//     //     {
//     //         label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
//     //         year: 1964,
//     //     },
//     //     { label: 'The Great Dictator', year: 1940 },
//     //     { label: 'Cinema Paradiso', year: 1988 },
//     //     { label: 'The Lives of Others', year: 2006 },
//     //     { label: 'Grave of the Fireflies', year: 1988 },
//     //     { label: 'Paths of Glory', year: 1957 },
//     //     { label: 'Django Unchained', year: 2012 },
//     //     { label: 'The Shining', year: 1980 },
//     //     { label: 'WALL·E', year: 2008 },
//     //     { label: 'American Beauty', year: 1999 },
//     //     { label: 'The Dark Knight Rises', year: 2012 },
//     //     { label: 'Princess Mononoke', year: 1997 },
//     //     { label: 'Aliens', year: 1986 },
//     //     { label: 'Oldboy', year: 2003 },
//     //     { label: 'Once Upon a Time in America', year: 1984 },
//     //     { label: 'Witness for the Prosecution', year: 1957 },
//     //     { label: 'Das Boot', year: 1981 },
//     //     { label: 'Citizen Kane', year: 1941 },
//     //     { label: 'North by Northwest', year: 1959 },
//     //     { label: 'Vertigo', year: 1958 },
//     //     {
//     //         label: 'Star Wars: Episode VI - Return of the Jedi',
//     //         year: 1983,
//     //     },
//     //     { label: 'Reservoir Dogs', year: 1992 },
//     //     { label: 'Braveheart', year: 1995 },
//     //     { label: 'M', year: 1931 },
//     //     { label: 'Requiem for a Dream', year: 2000 },
//     //     { label: 'Amélie', year: 2001 },
//     //     { label: 'A Clockwork Orange', year: 1971 },
//     //     { label: 'Like Stars on Earth', year: 2007 },
//     //     { label: 'Taxi Driver', year: 1976 },
//     //     { label: 'Lawrence of Arabia', year: 1962 },
//     //     { label: 'Double Indemnity', year: 1944 },
//     //     {
//     //         label: 'Eternal Sunshine of the Spotless Mind',
//     //         year: 2004,
//     //     },
//     //     { label: 'Amadeus', year: 1984 },
//     //     { label: 'To Kill a Mockingbird', year: 1962 },
//     //     { label: 'Toy Story 3', year: 2010 },
//     //     { label: 'Logan', year: 2017 },
//     //     { label: 'Full Metal Jacket', year: 1987 },
//     //     { label: 'Dangal', year: 2016 },
//     //     { label: 'The Sting', year: 1973 },
//     //     { label: '2001: A Space Odyssey', year: 1968 },
//     //     { label: "Singin' in the Rain", year: 1952 },
//     //     { label: 'Toy Story', year: 1995 },
//     //     { label: 'Bicycle Thieves', year: 1948 },
//     //     { label: 'The Kid', year: 1921 },
//     //     { label: 'Inglourious Basterds', year: 2009 },
//     //     { label: 'Snatch', year: 2000 },
//     //     { label: '3 Idiots', year: 2009 },
//     //     { label: 'Monty Python and the Holy Grail', year: 1975 },
//     // ];




//     // const countries = [
//     //     { code: 'AD', label: 'Andorra', phone: '376' },
//     //     {
//     //         code: 'AE',
//     //         label: 'United Arab Emirates',
//     //         phone: '971',
//     //     },
//     //     { code: 'AF', label: 'Afghanistan', phone: '93' },
//     //     {
//     //         code: 'AG',
//     //         label: 'Antigua and Barbuda',
//     //         phone: '1-268',
//     //     },
//     //     { code: 'AI', label: 'Anguilla', phone: '1-264' },
//     //     { code: 'AL', label: 'Albania', phone: '355' },
//     //     { code: 'AM', label: 'Armenia', phone: '374' },
//     //     { code: 'AO', label: 'Angola', phone: '244' },
//     //     { code: 'AQ', label: 'Antarctica', phone: '672' },
//     //     { code: 'AR', label: 'Argentina', phone: '54' },
//     //     { code: 'AS', label: 'American Samoa', phone: '1-684' },
//     //     { code: 'AT', label: 'Austria', phone: '43' },
//     //     {
//     //         code: 'AU',
//     //         label: 'Australia',
//     //         phone: '61',
//     //         suggested: true,
//     //     },
//     //     { code: 'AW', label: 'Aruba', phone: '297' },
//     //     { code: 'AX', label: 'Alland Islands', phone: '358' },
//     //     { code: 'AZ', label: 'Azerbaijan', phone: '994' },
//     //     {
//     //         code: 'BA',
//     //         label: 'Bosnia and Herzegovina',
//     //         phone: '387',
//     //     },
//     //     { code: 'BB', label: 'Barbados', phone: '1-246' },
//     //     { code: 'BD', label: 'Bangladesh', phone: '880' },
//     //     { code: 'BE', label: 'Belgium', phone: '32' },
//     //     { code: 'BF', label: 'Burkina Faso', phone: '226' },
//     //     { code: 'BG', label: 'Bulgaria', phone: '359' },
//     //     { code: 'BH', label: 'Bahrain', phone: '973' },
//     //     { code: 'BI', label: 'Burundi', phone: '257' },
//     //     { code: 'BJ', label: 'Benin', phone: '229' },
//     //     { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
//     //     { code: 'BM', label: 'Bermuda', phone: '1-441' },
//     //     { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
//     //     { code: 'BO', label: 'Bolivia', phone: '591' },
//     //     { code: 'BR', label: 'Brazil', phone: '55' },
//     //     { code: 'BS', label: 'Bahamas', phone: '1-242' },
//     //     { code: 'BT', label: 'Bhutan', phone: '975' },
//     //     { code: 'BV', label: 'Bouvet Island', phone: '47' },
//     //     { code: 'BW', label: 'Botswana', phone: '267' },
//     //     { code: 'BY', label: 'Belarus', phone: '375' },
//     //     { code: 'BZ', label: 'Belize', phone: '501' },
//     //     {
//     //         code: 'CA',
//     //         label: 'Canada',
//     //         phone: '1',
//     //         suggested: true,
//     //     },
//     //     {
//     //         code: 'CC',
//     //         label: 'Cocos (Keeling) Islands',
//     //         phone: '61',
//     //     },
//     //     {
//     //         code: 'CD',
//     //         label: 'Congo, Democratic Republic of the',
//     //         phone: '243',
//     //     },
//     //     {
//     //         code: 'CF',
//     //         label: 'Central African Republic',
//     //         phone: '236',
//     //     },
//     //     {
//     //         code: 'CG',
//     //         label: 'Congo, Republic of the',
//     //         phone: '242',
//     //     },
//     //     { code: 'CH', label: 'Switzerland', phone: '41' },
//     //     { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
//     //     { code: 'CK', label: 'Cook Islands', phone: '682' },
//     //     { code: 'CL', label: 'Chile', phone: '56' },
//     //     { code: 'CM', label: 'Cameroon', phone: '237' },
//     //     { code: 'CN', label: 'China', phone: '86' },
//     //     { code: 'CO', label: 'Colombia', phone: '57' },
//     //     { code: 'CR', label: 'Costa Rica', phone: '506' },
//     //     { code: 'CU', label: 'Cuba', phone: '53' },
//     //     { code: 'CV', label: 'Cape Verde', phone: '238' },
//     //     { code: 'CW', label: 'Curacao', phone: '599' },
//     //     { code: 'CX', label: 'Christmas Island', phone: '61' },
//     //     { code: 'CY', label: 'Cyprus', phone: '357' },
//     //     { code: 'CZ', label: 'Czech Republic', phone: '420' },
//     //     {
//     //         code: 'DE',
//     //         label: 'Germany',
//     //         phone: '49',
//     //         suggested: true,
//     //     },
//     //     { code: 'DJ', label: 'Djibouti', phone: '253' },
//     //     { code: 'DK', label: 'Denmark', phone: '45' },
//     //     { code: 'DM', label: 'Dominica', phone: '1-767' },
//     //     {
//     //         code: 'DO',
//     //         label: 'Dominican Republic',
//     //         phone: '1-809',
//     //     },
//     //     { code: 'DZ', label: 'Algeria', phone: '213' },
//     //     { code: 'EC', label: 'Ecuador', phone: '593' },
//     //     { code: 'EE', label: 'Estonia', phone: '372' },
//     //     { code: 'EG', label: 'Egypt', phone: '20' },
//     //     { code: 'EH', label: 'Western Sahara', phone: '212' },
//     //     { code: 'ER', label: 'Eritrea', phone: '291' },
//     //     { code: 'ES', label: 'Spain', phone: '34' },
//     //     { code: 'ET', label: 'Ethiopia', phone: '251' },
//     //     { code: 'FI', label: 'Finland', phone: '358' },
//     //     { code: 'FJ', label: 'Fiji', phone: '679' },
//     //     {
//     //         code: 'FK',
//     //         label: 'Falkland Islands (Malvinas)',
//     //         phone: '500',
//     //     },
//     //     {
//     //         code: 'FM',
//     //         label: 'Micronesia, Federated States of',
//     //         phone: '691',
//     //     },
//     //     { code: 'FO', label: 'Faroe Islands', phone: '298' },
//     //     {
//     //         code: 'FR',
//     //         label: 'France',
//     //         phone: '33',
//     //         suggested: true,
//     //     },
//     //     { code: 'GA', label: 'Gabon', phone: '241' },
//     //     { code: 'GB', label: 'United Kingdom', phone: '44' },
//     //     { code: 'GD', label: 'Grenada', phone: '1-473' },
//     //     { code: 'GE', label: 'Georgia', phone: '995' },
//     //     { code: 'GF', label: 'French Guiana', phone: '594' },
//     //     { code: 'GG', label: 'Guernsey', phone: '44' },
//     //     { code: 'GH', label: 'Ghana', phone: '233' },
//     //     { code: 'GI', label: 'Gibraltar', phone: '350' },
//     //     { code: 'GL', label: 'Greenland', phone: '299' },
//     //     { code: 'GM', label: 'Gambia', phone: '220' },
//     //     { code: 'GN', label: 'Guinea', phone: '224' },
//     //     { code: 'GP', label: 'Guadeloupe', phone: '590' },
//     //     { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
//     //     { code: 'GR', label: 'Greece', phone: '30' },
//     //     {
//     //         code: 'GS',
//     //         label: 'South Georgia and the South Sandwich Islands',
//     //         phone: '500',
//     //     },
//     //     { code: 'GT', label: 'Guatemala', phone: '502' },
//     //     { code: 'GU', label: 'Guam', phone: '1-671' },
//     //     { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
//     //     { code: 'GY', label: 'Guyana', phone: '592' },
//     //     { code: 'HK', label: 'Hong Kong', phone: '852' },
//     //     {
//     //         code: 'HM',
//     //         label: 'Heard Island and McDonald Islands',
//     //         phone: '672',
//     //     },
//     //     { code: 'HN', label: 'Honduras', phone: '504' },
//     //     { code: 'HR', label: 'Croatia', phone: '385' },
//     //     { code: 'HT', label: 'Haiti', phone: '509' },
//     //     { code: 'HU', label: 'Hungary', phone: '36' },
//     //     { code: 'ID', label: 'Indonesia', phone: '62' },
//     //     { code: 'IE', label: 'Ireland', phone: '353' },
//     //     { code: 'IL', label: 'Israel', phone: '972' },
//     //     { code: 'IM', label: 'Isle of Man', phone: '44' },
//     //     { code: 'IN', label: 'India', phone: '91' },
//     //     {
//     //         code: 'IO',
//     //         label: 'British Indian Ocean Territory',
//     //         phone: '246',
//     //     },
//     //     { code: 'IQ', label: 'Iraq', phone: '964' },
//     //     {
//     //         code: 'IR',
//     //         label: 'Iran, Islamic Republic of',
//     //         phone: '98',
//     //     },
//     //     { code: 'IS', label: 'Iceland', phone: '354' },
//     //     { code: 'IT', label: 'Italy', phone: '39' },
//     //     { code: 'JE', label: 'Jersey', phone: '44' },
//     //     { code: 'JM', label: 'Jamaica', phone: '1-876' },
//     //     { code: 'JO', label: 'Jordan', phone: '962' },
//     //     {
//     //         code: 'JP',
//     //         label: 'Japan',
//     //         phone: '81',
//     //         suggested: true,
//     //     },
//     //     { code: 'KE', label: 'Kenya', phone: '254' },
//     //     { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
//     //     { code: 'KH', label: 'Cambodia', phone: '855' },
//     //     { code: 'KI', label: 'Kiribati', phone: '686' },
//     //     { code: 'KM', label: 'Comoros', phone: '269' },
//     //     {
//     //         code: 'KN',
//     //         label: 'Saint Kitts and Nevis',
//     //         phone: '1-869',
//     //     },
//     //     {
//     //         code: 'KP',
//     //         label: "Korea, Democratic People's Republic of",
//     //         phone: '850',
//     //     },
//     //     { code: 'KR', label: 'Korea, Republic of', phone: '82' },
//     //     { code: 'KW', label: 'Kuwait', phone: '965' },
//     //     { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
//     //     { code: 'KZ', label: 'Kazakhstan', phone: '7' },
//     //     {
//     //         code: 'LA',
//     //         label: "Lao People's Democratic Republic",
//     //         phone: '856',
//     //     },
//     //     { code: 'LB', label: 'Lebanon', phone: '961' },
//     //     { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
//     //     { code: 'LI', label: 'Liechtenstein', phone: '423' },
//     //     { code: 'LK', label: 'Sri Lanka', phone: '94' },
//     //     { code: 'LR', label: 'Liberia', phone: '231' },
//     //     { code: 'LS', label: 'Lesotho', phone: '266' },
//     //     { code: 'LT', label: 'Lithuania', phone: '370' },
//     //     { code: 'LU', label: 'Luxembourg', phone: '352' },
//     //     { code: 'LV', label: 'Latvia', phone: '371' },
//     //     { code: 'LY', label: 'Libya', phone: '218' },
//     //     { code: 'MA', label: 'Morocco', phone: '212' },
//     //     { code: 'MC', label: 'Monaco', phone: '377' },
//     //     {
//     //         code: 'MD',
//     //         label: 'Moldova, Republic of',
//     //         phone: '373',
//     //     },
//     //     { code: 'ME', label: 'Montenegro', phone: '382' },
//     //     {
//     //         code: 'MF',
//     //         label: 'Saint Martin (French part)',
//     //         phone: '590',
//     //     },
//     //     { code: 'MG', label: 'Madagascar', phone: '261' },
//     //     { code: 'MH', label: 'Marshall Islands', phone: '692' },
//     //     {
//     //         code: 'MK',
//     //         label: 'Macedonia, the Former Yugoslav Republic of',
//     //         phone: '389',
//     //     },
//     //     { code: 'ML', label: 'Mali', phone: '223' },
//     //     { code: 'MM', label: 'Myanmar', phone: '95' },
//     //     { code: 'MN', label: 'Mongolia', phone: '976' },
//     //     { code: 'MO', label: 'Macao', phone: '853' },
//     //     {
//     //         code: 'MP',
//     //         label: 'Northern Mariana Islands',
//     //         phone: '1-670',
//     //     },
//     //     { code: 'MQ', label: 'Martinique', phone: '596' },
//     //     { code: 'MR', label: 'Mauritania', phone: '222' },
//     //     { code: 'MS', label: 'Montserrat', phone: '1-664' },
//     //     { code: 'MT', label: 'Malta', phone: '356' },
//     //     { code: 'MU', label: 'Mauritius', phone: '230' },
//     //     { code: 'MV', label: 'Maldives', phone: '960' },
//     //     { code: 'MW', label: 'Malawi', phone: '265' },
//     //     { code: 'MX', label: 'Mexico', phone: '52' },
//     //     { code: 'MY', label: 'Malaysia', phone: '60' },
//     //     { code: 'MZ', label: 'Mozambique', phone: '258' },
//     //     { code: 'NA', label: 'Namibia', phone: '264' },
//     //     { code: 'NC', label: 'New Caledonia', phone: '687' },
//     //     { code: 'NE', label: 'Niger', phone: '227' },
//     //     { code: 'NF', label: 'Norfolk Island', phone: '672' },
//     //     { code: 'NG', label: 'Nigeria', phone: '234' },
//     //     { code: 'NI', label: 'Nicaragua', phone: '505' },
//     //     { code: 'NL', label: 'Netherlands', phone: '31' },
//     //     { code: 'NO', label: 'Norway', phone: '47' },
//     //     { code: 'NP', label: 'Nepal', phone: '977' },
//     //     { code: 'NR', label: 'Nauru', phone: '674' },
//     //     { code: 'NU', label: 'Niue', phone: '683' },
//     //     { code: 'NZ', label: 'New Zealand', phone: '64' },
//     //     { code: 'OM', label: 'Oman', phone: '968' },
//     //     { code: 'PA', label: 'Panama', phone: '507' },
//     //     { code: 'PE', label: 'Peru', phone: '51' },
//     //     { code: 'PF', label: 'French Polynesia', phone: '689' },
//     //     { code: 'PG', label: 'Papua New Guinea', phone: '675' },
//     //     { code: 'PH', label: 'Philippines', phone: '63' },
//     //     { code: 'PK', label: 'Pakistan', phone: '92' },
//     //     { code: 'PL', label: 'Poland', phone: '48' },
//     //     {
//     //         code: 'PM',
//     //         label: 'Saint Pierre and Miquelon',
//     //         phone: '508',
//     //     },
//     //     { code: 'PN', label: 'Pitcairn', phone: '870' },
//     //     { code: 'PR', label: 'Puerto Rico', phone: '1' },
//     //     {
//     //         code: 'PS',
//     //         label: 'Palestine, State of',
//     //         phone: '970',
//     //     },
//     //     { code: 'PT', label: 'Portugal', phone: '351' },
//     //     { code: 'PW', label: 'Palau', phone: '680' },
//     //     { code: 'PY', label: 'Paraguay', phone: '595' },
//     //     { code: 'QA', label: 'Qatar', phone: '974' },
//     //     { code: 'RE', label: 'Reunion', phone: '262' },
//     //     { code: 'RO', label: 'Romania', phone: '40' },
//     //     { code: 'RS', label: 'Serbia', phone: '381' },
//     //     { code: 'RU', label: 'Russian Federation', phone: '7' },
//     //     { code: 'RW', label: 'Rwanda', phone: '250' },
//     //     { code: 'SA', label: 'Saudi Arabia', phone: '966' },
//     //     { code: 'SB', label: 'Solomon Islands', phone: '677' },
//     //     { code: 'SC', label: 'Seychelles', phone: '248' },
//     //     { code: 'SD', label: 'Sudan', phone: '249' },
//     //     { code: 'SE', label: 'Sweden', phone: '46' },
//     //     { code: 'SG', label: 'Singapore', phone: '65' },
//     //     { code: 'SH', label: 'Saint Helena', phone: '290' },
//     //     { code: 'SI', label: 'Slovenia', phone: '386' },
//     //     {
//     //         code: 'SJ',
//     //         label: 'Svalbard and Jan Mayen',
//     //         phone: '47',
//     //     },
//     //     { code: 'SK', label: 'Slovakia', phone: '421' },
//     //     { code: 'SL', label: 'Sierra Leone', phone: '232' },
//     //     { code: 'SM', label: 'San Marino', phone: '378' },
//     //     { code: 'SN', label: 'Senegal', phone: '221' },
//     //     { code: 'SO', label: 'Somalia', phone: '252' },
//     //     { code: 'SR', label: 'Suriname', phone: '597' },
//     //     { code: 'SS', label: 'South Sudan', phone: '211' },
//     //     {
//     //         code: 'ST',
//     //         label: 'Sao Tome and Principe',
//     //         phone: '239',
//     //     },
//     //     { code: 'SV', label: 'El Salvador', phone: '503' },
//     //     {
//     //         code: 'SX',
//     //         label: 'Sint Maarten (Dutch part)',
//     //         phone: '1-721',
//     //     },
//     //     {
//     //         code: 'SY',
//     //         label: 'Syrian Arab Republic',
//     //         phone: '963',
//     //     },
//     //     { code: 'SZ', label: 'Swaziland', phone: '268' },
//     //     {
//     //         code: 'TC',
//     //         label: 'Turks and Caicos Islands',
//     //         phone: '1-649',
//     //     },
//     //     { code: 'TD', label: 'Chad', phone: '235' },
//     //     {
//     //         code: 'TF',
//     //         label: 'French Southern Territories',
//     //         phone: '262',
//     //     },
//     //     { code: 'TG', label: 'Togo', phone: '228' },
//     //     { code: 'TH', label: 'Thailand', phone: '66' },
//     //     { code: 'TJ', label: 'Tajikistan', phone: '992' },
//     //     { code: 'TK', label: 'Tokelau', phone: '690' },
//     //     { code: 'TL', label: 'Timor-Leste', phone: '670' },
//     //     { code: 'TM', label: 'Turkmenistan', phone: '993' },
//     //     { code: 'TN', label: 'Tunisia', phone: '216' },
//     //     { code: 'TO', label: 'Tonga', phone: '676' },
//     //     { code: 'TR', label: 'Turkey', phone: '90' },
//     //     {
//     //         code: 'TT',
//     //         label: 'Trinidad and Tobago',
//     //         phone: '1-868',
//     //     },
//     //     { code: 'TV', label: 'Tuvalu', phone: '688' },
//     //     {
//     //         code: 'TW',
//     //         label: 'Taiwan',
//     //         phone: '886',
//     //     },
//     //     {
//     //         code: 'TZ',
//     //         label: 'United Republic of Tanzania',
//     //         phone: '255',
//     //     },
//     //     { code: 'UA', label: 'Ukraine', phone: '380' },
//     //     { code: 'UG', label: 'Uganda', phone: '256' },
//     //     {
//     //         code: 'US',
//     //         label: 'United States',
//     //         phone: '1',
//     //         suggested: true,
//     //     },
//     //     { code: 'UY', label: 'Uruguay', phone: '598' },
//     //     { code: 'UZ', label: 'Uzbekistan', phone: '998' },
//     //     {
//     //         code: 'VA',
//     //         label: 'Holy See (Vatican City State)',
//     //         phone: '379',
//     //     },
//     //     {
//     //         code: 'VC',
//     //         label: 'Saint Vincent and the Grenadines',
//     //         phone: '1-784',
//     //     },
//     //     { code: 'VE', label: 'Venezuela', phone: '58' },
//     //     {
//     //         code: 'VG',
//     //         label: 'British Virgin Islands',
//     //         phone: '1-284',
//     //     },
//     //     {
//     //         code: 'VI',
//     //         label: 'US Virgin Islands',
//     //         phone: '1-340',
//     //     },
//     //     { code: 'VN', label: 'Vietnam', phone: '84' },
//     //     { code: 'VU', label: 'Vanuatu', phone: '678' },
//     //     { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
//     //     { code: 'WS', label: 'Samoa', phone: '685' },
//     //     { code: 'XK', label: 'Kosovo', phone: '383' },
//     //     { code: 'YE', label: 'Yemen', phone: '967' },
//     //     { code: 'YT', label: 'Mayotte', phone: '262' },
//     //     { code: 'ZA', label: 'South Africa', phone: '27' },
//     //     { code: 'ZM', label: 'Zambia', phone: '260' },
//     //     { code: 'ZW', label: 'Zimbabwe', phone: '263' },
//     // ];




//     const [alignment, setAlignment] = React.useState('web');

//     const handleChange = (event, newAlignment) => {
//         setAlignment(newAlignment);
//     };











//     const [selectedCountry, setSelectedCountry] = useState("");
//     const [open, setOpen] = useState(false);

//     const countries = [
//         "🇵🇰 Pakistan",
//         "🇮🇳 India",
//         "🇺🇸 United States",
//         "🇬🇧 United Kingdom",
//         "🇨🇦 Canada",
//         "🇦🇺 Australia",
//         "🇩🇪 Germany",
//         "🇫🇷 France",
//         "🇯🇵 Japan",
//         "🇨🇳 China",
//         "🇸🇦 Saudi Arabia",
//         "🇦🇪 United Arab Emirates",
//         "🇹🇷 Turkey",
//         "🇮🇩 Indonesia",
//         "🇲🇾 Malaysia",
//         "🇧🇩 Bangladesh",
//         "🇶🇦 Qatar",
//         "🇮🇹 Italy",
//         "🇪🇸 Spain",
//         "🇧🇷 Brazil",
//     ];

//     const handleSelect = (country) => {
//         setSelectedCountry(country);
//         setOpen(false);
//     };





//     return (
//         <div>


//             {/* <div>
//                 <Switch {...label} defaultChecked />
//                 <Switch {...label} />
//                 <Switch {...label} disabled defaultChecked />
//                 <Switch {...label} disabled />
//             </div> */}


//             {/* <Box sx={{ '& > :not(style)': { m: 1 } }}>
//                 <Fab color="primary" aria-label="add">
//                     <AddIcon />
//                 </Fab>
//                 <Fab color="secondary" aria-label="edit">
//                     <EditIcon />
//                 </Fab>
//                 <Fab variant="extended">
//                     <NavigationIcon sx={{ mr: 1 }} />
//                     Navigate
//                 </Fab>
//                 <Fab  aria-label="like">
//                     <FavoriteIcon />
//                 </Fab>
//             </Box> */}


//             {/* <Autocomplete
//                 disablePortal
//                 options={top100Films}
//                 sx={{ width: 300 }}
//                 renderInput={(params) => <TextField {...params} label="Movie" />}
//             /> */}


//             {/* <Autocomplete
//                 id="country-select-demo"
//                 sx={{ width: 300 }}
//                 options={countries}
//                 autoHighlight
//                 getOptionLabel={(option) => option.label}
//                 renderOption={(props, option) => {
//                     const { key, ...optionProps } = props;
//                     return (
//                         <Box
//                             key={key}
//                             component="li"
//                             sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
//                             {...optionProps}
//                         >
//                             <img
//                                 loading="lazy"
//                                 width="20"
//                                 srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
//                                 src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
//                                 alt=""
//                             />
//                             {option.label} ({option.code}) +{option.phone}
//                         </Box>
//                     );
//                 }}
//                 renderInput={(params) => (
//                     <TextField
//                         {...params}
//                         label="Choose a country"
//                         slotProps={{
//                             ...params.slotProps,
//                             htmlInput: {
//                                 ...params.slotProps.htmlInput,
//                                 autoComplete: 'new-password', // disable autocomplete and autofill
//                             },
//                         }}
//                     />
//                 )}
//             />

//  */}






//             <>
//                 <style>{`
//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//         }

//         body {
//           font-family: Arial, Helvetica, sans-serif;
//           min-height: 100vh;
//           overflow-x: hidden;
//         }

//         .page {
//           min-height: 100vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           position: relative;
//           overflow: hidden;

//           background:
//             radial-gradient(circle at 20% 20%, #284cff55, transparent 30%),
//             radial-gradient(circle at 80% 80%, #b92cff44, transparent 30%),
//             linear-gradient(135deg, #070b1a, #101735, #080b18);
//         }

//         /* Animated background circles */

//         .orb {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(3px);
//           pointer-events: none;
//         }

//         .orb.one {
//           width: 250px;
//           height: 250px;
//           background: #246bff55;
//           top: -70px;
//           left: -70px;
//           animation: floatOne 7s infinite alternate ease-in-out;
//         }

//         .orb.two {
//           width: 300px;
//           height: 300px;
//           background: #b52cff44;
//           bottom: -100px;
//           right: -80px;
//           animation: floatTwo 8s infinite alternate ease-in-out;
//         }

//         .orb.three {
//           width: 120px;
//           height: 120px;
//           background: #00eaff33;
//           top: 25%;
//           right: 15%;
//           animation: floatThree 5s infinite alternate ease-in-out;
//         }

//         @keyframes floatOne {
//           from {
//             transform: translate(0, 0);
//           }

//           to {
//             transform: translate(80px, 60px);
//           }
//         }

//         @keyframes floatTwo {
//           from {
//             transform: translate(0, 0);
//           }

//           to {
//             transform: translate(-70px, -60px);
//           }
//         }

//         @keyframes floatThree {
//           from {
//             transform: translateY(0);
//           }

//           to {
//             transform: translateY(-60px);
//           }
//         }

//         /* Main Card */

//         .card {
//           width: min(92%, 550px);
//           padding: 45px 40px;
//           position: relative;
//           z-index: 5;

//           border: 1px solid rgba(255, 255, 255, 0.15);
//           border-radius: 28px;

//           background: rgba(255, 255, 255, 0.08);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);

//           box-shadow:
//             0 30px 80px rgba(0, 0, 0, 0.5),
//             inset 0 1px rgba(255, 255, 255, 0.15);

//           text-align: center;

//           animation: cardIn 0.8s ease-out;
//         }

//         @keyframes cardIn {
//           from {
//             opacity: 0;
//             transform: translateY(40px) scale(0.92);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .icon {
//           width: 70px;
//           height: 70px;
//           margin: 0 auto 20px;

//           display: flex;
//           justify-content: center;
//           align-items: center;

//           border-radius: 20px;

//           font-size: 32px;

//           background: linear-gradient(
//             135deg,
//             #536dfe,
//             #9c27ff
//           );

//           box-shadow:
//             0 0 30px #536dfe66,
//             0 0 60px #9c27ff33;

//           animation: iconFloat 3s infinite ease-in-out;
//         }

//         @keyframes iconFloat {
//           0%, 100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-8px);
//           }
//         }

//         .title {
//           color: white;
//           font-size: 30px;
//           font-weight: 700;
//           margin-bottom: 10px;
//           letter-spacing: 0.5px;
//         }

//         .subtitle {
//           color: #aeb8d6;
//           font-size: 15px;
//           margin-bottom: 30px;
//         }

//         /* Dropdown */

//         .dropdown {
//           position: relative;
//           width: 100%;
//         }

//         .dropdown-button {
//           width: 100%;
//           padding: 18px 20px;

//           display: flex;
//           justify-content: space-between;
//           align-items: center;

//           border: 1px solid rgba(255, 255, 255, 0.18);
//           border-radius: 15px;

//           background: rgba(255, 255, 255, 0.08);
//           color: white;

//           font-size: 16px;
//           cursor: pointer;

//           transition: 0.3s ease;
//         }

//         .dropdown-button:hover {
//           border-color: #6c7cff;
//           background: rgba(255, 255, 255, 0.13);

//           box-shadow:
//             0 0 20px rgba(83, 109, 254, 0.25);

//           transform: translateY(-2px);
//         }

//         .arrow {
//           font-size: 18px;
//           transition: transform 0.3s ease;
//         }

//         .arrow.rotate {
//           transform: rotate(180deg);
//         }

//         /* Options */

//         .options {
//           position: absolute;
//           top: calc(100% + 10px);
//           left: 0;
//           width: 100%;

//           max-height: 250px;
//           overflow-y: auto;

//           padding: 8px;

//           border: 1px solid rgba(255, 255, 255, 0.15);
//           border-radius: 16px;

//           background: rgba(12, 17, 38, 0.96);
//           backdrop-filter: blur(20px);

//           box-shadow:
//             0 20px 50px rgba(0, 0, 0, 0.5);

//           z-index: 20;

//           animation: dropdownIn 0.25s ease-out;
//         }

//         @keyframes dropdownIn {
//           from {
//             opacity: 0;
//             transform: translateY(-10px) scale(0.97);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .option {
//           padding: 14px 15px;
//           border-radius: 10px;

//           color: #e7eaff;
//           text-align: left;

//           cursor: pointer;

//           transition: 0.2s ease;
//         }

//         .option:hover {
//           background: linear-gradient(
//             90deg,
//             #536dfe33,
//             #9c27ff33
//           );

//           color: white;
//           transform: translateX(5px);
//         }

//         .option.active {
//           background: linear-gradient(
//             90deg,
//             #536dfe55,
//             #9c27ff55
//           );

//           color: white;
//         }

//         /* Scrollbar */

//         .options::-webkit-scrollbar {
//           width: 6px;
//         }

//         .options::-webkit-scrollbar-track {
//           background: transparent;
//         }

//         .options::-webkit-scrollbar-thumb {
//           background: #6675ff;
//           border-radius: 20px;
//         }

//         /* Selected message */

//         .selected {
//           margin-top: 25px;
//           padding: 15px;

//           border-radius: 14px;

//           background: rgba(80, 255, 180, 0.08);
//           border: 1px solid rgba(80, 255, 180, 0.2);

//           color: #9fffd0;

//           animation: selectedIn 0.4s ease-out;
//         }

//         @keyframes selectedIn {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }

//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .selected strong {
//           color: white;
//         }

//         /* Bottom text */

//         .hint {
//           margin-top: 25px;
//           color: #727d9f;
//           font-size: 12px;
//         }

//         /* Mobile */

//         @media (max-width: 600px) {
//           .card {
//             padding: 32px 22px;
//           }

//           .title {
//             font-size: 25px;
//           }

//           .subtitle {
//             font-size: 14px;
//           }
//         }
//       `}</style>

//                 <div className="page">

//                     {/* Animated background */}
//                     <div className="orb one"></div>
//                     <div className="orb two"></div>
//                     <div className="orb three"></div>

//                     {/* Main Card */}
//                     <div className="card">

//                         <div className="icon">
//                             🌎
//                         </div>

//                         <h1 className="title">
//                             Choose Your Country
//                         </h1>

//                         <p className="subtitle">
//                             Select your country from the list below
//                         </p>

//                         <div className="dropdown">

//                             {/* Dropdown Button */}
//                             <button
//                                 className="dropdown-button"
//                                 onClick={() => setOpen(!open)}
//                             >
//                                 <span>
//                                     {selectedCountry || "Choose a country"}
//                                 </span>

//                                 <span
//                                     className={`arrow ${open ? "rotate" : ""}`}
//                                 >
//                                     ▼
//                                 </span>
//                             </button>

//                             {/* Dropdown Options */}
//                             {open && (
//                                 <div className="options">

//                                     {countries.map((country) => (
//                                         <div
//                                             key={country}
//                                             className={`option ${selectedCountry === country
//                                                 ? "active"
//                                                 : ""
//                                                 }`}
//                                             onClick={() => handleSelect(country)}
//                                         >
//                                             {country}
//                                         </div>
//                                     ))}

//                                 </div>
//                             )}

//                         </div>

//                         {/* Selected Country */}
//                         {selectedCountry && (
//                             <div className="selected">
//                                 ✅ You selected:{" "}
//                                 <strong>{selectedCountry}</strong>
//                             </div>
//                         )}

//                         <p className="hint">
//                             Click the dropdown to explore countries ✨
//                         </p>

//                     </div>
//                 </div>
//             </>



//             <ToggleButtonGroup
//                 color="primary"
//                 value={alignment}
//                 exclusive
//                 onChange={handleChange}
//                 aria-label="Platform"
//             >
//                 <ToggleButton value="web">Web</ToggleButton>
//                 <ToggleButton value="android">Android</ToggleButton>
//                 <ToggleButton value="ios">iOS</ToggleButton>
//             </ToggleButtonGroup>







//         </div>
//     )
// }

// export default ModalsMui