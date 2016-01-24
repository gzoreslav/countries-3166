import countries from '../../src/index.js';

document.getElementById('default').onclick = () => {
    console.info('=== alpha-3 / object ===');
    countries.init();
    console.log(countries.values());
};

document.getElementById('array').onclick = () => {
    console.info('=== alpha-3 / array ===');
    countries.init();
    console.log(countries.toArray());
};

document.getElementById('a2').onclick = () => {
    console.info('=== alpha-2 / object ===');
    countries.init();
    console.log(countries.alpha2().values());
};

document.getElementById('a2-array').onclick = () => {
    console.info('=== alpha-2 / array ===');
    countries.init();
    console.log(countries.alpha2().toArray());
};

//translation

document.getElementById('ukr').onclick = () => {
    console.info('=== alpha-3 / translated / object ===');
    countries.init();
    console.log(countries.translate('UKR').values());
};

document.getElementById('ukr-a2').onclick = () => {
    console.info('=== alpha-2 / translated / array ===');
    countries.init();
    console.log(countries.translate('UKR').alpha2().toArray());
};

document.getElementById('ru-a2-array').onclick = () => {
    console.info('=== alpha-2 / translated / object ===');
    countries.init();
    console.log(countries.translate('RU').alpha2().values());
};

//sort

document.getElementById('keysort').onclick = () => {
    console.info('=== alpha-3 / sort by key / object ===');
    countries.init();
    console.log(countries.sortByKey().values());
};

document.getElementById('namesort').onclick = () => {
    console.info('=== alpha-3 / sort by name / object ===');
    countries.init();
    console.log(countries.translate('UKR').sortByName().toArray());
};