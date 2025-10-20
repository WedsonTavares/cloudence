import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Enable static export for GitHub Pages (produces an `out/` folder when running `next export`).
	// Note: Next 15+ recommends `output: 'export'` instead of deprecated `next export`.
	output: 'export',
};

export default nextConfig;
