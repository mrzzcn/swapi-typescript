export const format = 'json';

export const People = {
    id: 'ID',
    name: '姓名',
    height: '身高',
    mass: '体重',
    hair_color: '发色', // eslint-disable-line @typescript-eslint/camelcase
    skin_color: '肤色', // eslint-disable-line @typescript-eslint/camelcase
    eye_color: '眼球颜色', // eslint-disable-line @typescript-eslint/camelcase
    birth_year: '出生年份', // eslint-disable-line @typescript-eslint/camelcase
    gender: '性别',
    homeworld: '故乡',
    films: '参演影片',
    species: '所属物种',
    vehicles: '坐骑',
    starships: '飞船',
    created: '录入时间',
    edited: '更新时间',
    url: '链接'
};

export const Film = {
    title: '片名',
    episode_id: '剧集编号', // eslint-disable-line @typescript-eslint/camelcase
    opening_crawl: '剧情梗概', // eslint-disable-line @typescript-eslint/camelcase
    director: '导演',
    producer: '制片人',
    release_date: '上映日期', // eslint-disable-line @typescript-eslint/camelcase
    characters: '演员',
    planets: '涉及星球',
    starships: '出现的飞船',
    vehicles: '出现的交通工具',
    species: '出现的物种',
    created: '录入时间',
    edited: '更新时间',
    url: '链接'
};

export const Planet = {
    name: '名称',
    rotation_period: '自转周期',
    orbital_period: '公转周期',
    diameter: '直径',
    climate: '气候',
    gravity: '重力',
    terrain: '地形',
    surface_water: '地表水',
    population: '人口',
    residents: '产生的角色',
    films: '出现影片',
    created: '录入时间',
    edited: '更新时间',
    url: '链接'
};

export default {
    format,
    People,
    Film,
    Planet,
};
