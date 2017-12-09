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

export const DEFAULT_MODULE = 'Home';