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
    rotation_period: '自转周期', // eslint-disable-line @typescript-eslint/camelcase
    orbital_period: '公转周期', // eslint-disable-line @typescript-eslint/camelcase
    diameter: '直径',
    climate: '气候',
    gravity: '重力',
    terrain: '地形',
    surface_water: '地表水', // eslint-disable-line @typescript-eslint/camelcase
    population: '人口',
    residents: '产生的角色',
    films: '出现影片',
    created: '录入时间',
    edited: '更新时间',
    url: '链接'
};

export const Species = {
    name: '物种名称',
    classification: '种类',
    designation: '特质',
    average_height: '平均身高', // eslint-disable-line @typescript-eslint/camelcase
    skin_colors: '肤色', // eslint-disable-line @typescript-eslint/camelcase
    hair_colors: '发色', // eslint-disable-line @typescript-eslint/camelcase
    eye_colors: '眼球颜色', // eslint-disable-line @typescript-eslint/camelcase
    average_lifespan: '平均寿命', // eslint-disable-line @typescript-eslint/camelcase
    homeworld: '母星',
    language: '语言',
    people: '包含角色',
    films: '出现影片',
    created: '录入时间',
    edited: '更新时间',
    url: '链接'
};

export const Starship = {
    name: '舰名',
    model: '型号',
    manufacturer: '制造商',
    cost_in_credits: '价格', // eslint-disable-line @typescript-eslint/camelcase
    length: '长度',
    max_atmosphering_speed: '最高速度', // eslint-disable-line @typescript-eslint/camelcase
    crew: '舰员',
    passengers: '乘客',
    cargo_capacity: '载重', // eslint-disable-line @typescript-eslint/camelcase
    consumables: '燃料可用时间',
    hyperdrive_rating: '超级驱动器状态', // eslint-disable-line @typescript-eslint/camelcase
    MGLT: 'MGLT',
    starship_class: '星舰等级', // eslint-disable-line @typescript-eslint/camelcase
    pilots: '驾驶员',
    films: '出现影片',
    created: '录入时间',
    edited: '更新时间',
    url: '链接'
};

export const Vehicle = {
    name: '舰名',
    model: '型号',
    manufacturer: '制造商',
    cost_in_credits: '价格', // eslint-disable-line @typescript-eslint/camelcase
    length: '长度',
    max_atmosphering_speed: '最高速度', // eslint-disable-line @typescript-eslint/camelcase
    crew: '舰员',
    passengers: '乘客',
    cargo_capacity: '载重', // eslint-disable-line @typescript-eslint/camelcase
    consumables: '燃料可用时间',
    vehicle_class: '等级', // eslint-disable-line @typescript-eslint/camelcase
    pilots: '飞行员',
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
    Species,
    Starship,
    Vehicle
};
