import type { LocationQueryRaw } from 'vue-router'

/**
 * Роутинг внутри проекта (универсальный вызов router.push)
 *
 * @param {string} path - Путь
 * @param {LocationQueryRaw} [query] - Параметры
 *
 * @example routeTo('/foo')
 * routeTo('/foo', { bar: 'baz' })
 *
 * @return {void} Редирект на /foo или /foo?bar=baz
 */
export const routeTo = (path: string, query?: LocationQueryRaw): void => {
	const route = useRoute()
	const router = useRouter()

	if (route.query !== query && route.path !== path) {
		query ? router.push({ path: path, query: query }) : router.push({ path: path })
	}
}
