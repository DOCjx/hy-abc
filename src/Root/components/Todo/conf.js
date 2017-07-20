/**
 * creat by DOCer 2017/7/10
 */
export const FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
};

export const LOCATION_FILTER_MAP = {
    '/Todo': FILTERS.ALL,
    '/Todo/active': FILTERS.ACTIVE,
    '/Todo/completed': FILTERS.COMPLETED
};

