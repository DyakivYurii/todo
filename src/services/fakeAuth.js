export default {
	isAuthenticated: true,
	authenticate(cb) {
		this.isAuthenticated = true;
		setTimeout(cb, 100);
	},
	signOut(cb) {
		this.isAuthenticated = false;
		setTimeout(cb, 100);
	}
};
