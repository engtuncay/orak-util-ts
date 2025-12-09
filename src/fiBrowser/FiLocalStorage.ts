export class FiLocalStorage {

	/**
	 * Anahtar ile localStorage'a veri kaydeder
	 * @param key string
	 * @param value any
	 */
	static set(key: string, value: any): void {
		try {
			const val = typeof value === 'string' ? value : JSON.stringify(value);
			window.localStorage.setItem(key, val);
		} catch (e) {
			// Hata yönetimi
			console.error('FiLocalStorage.set error:', e);
		}
	}

	/**
	 * Anahtar ile localStorage'dan veri okur
	 * @param key string
	 * @returns any | null
	 */
	static get<T = any>(key: string): T | null {
		try {
			const val = window.localStorage.getItem(key);
			if (val === null) return null;
			try {
				return JSON.parse(val) as T;
			} catch {
				return val as unknown as T;
			}
		} catch (e) {
			console.error('FiLocalStorage.get error:', e);
			return null;
		}
	}

	/**
	 * Anahtar ile localStorage'dan veriyi siler
	 * @param key string
	 */
	static remove(key: string): void {
		try {
			window.localStorage.removeItem(key);
		} catch (e) {
			console.error('FiLocalStorage.remove error:', e);
		}
	}

	/**
	 * Tüm localStorage verisini temizler
	 */
	static clear(): void {
		try {
			window.localStorage.clear();
		} catch (e) {
			console.error('FiLocalStorage.clear error:', e);
		}
	}
	/**
	 * Anahtar localStorage'da var mı kontrol eder
	 * @param key string
	 * @returns boolean
	 */
	static exist(key: string): boolean {
		try {
			return window.localStorage.getItem(key) !== null;
		} catch (e) {
			console.error('FiLocalStorage.exist error:', e);
			return false;
		}
	}

}