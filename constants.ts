const ENV = {
    test: {
        BASE_URL : 'https://buianthai.online/orangehrm/web/index.php/auth/login',
        VALID_USERNAME : 'TinaNguyen',
        VALID_PASSWORD : 'Admin@1234',
    },
};

const CURRENT_ENV = process.env.NODE_ENV || 'test';

export const { BASE_URL, VALID_USERNAME, VALID_PASSWORD} = ENV[CURRENT_ENV];
