This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

z-index: 10;
    cursor: pointer;
    display: none;
    text-align: right;
    display: block;
    padding: 0;
    background: #e7b053;
    padding: 10px 20px 20px;
    color: #fff;
    text-transform: uppercase;
    font-size: 13px;
    font-family: Prata,serif !important;


    <div class="bwp-filter-price">
		    <h3>Price</h3>
			<div class="content-filter-price">
				<div id="bwp_slider_price" data-min="12" data-max="815" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 100%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;"></span></div>
				<div class="price-input">
					<span>Range : </span>
					$<span class="input-text text-price-filter" id="text-price-filter-min-text">12</span> -
					$<span class="input-text text-price-filter" id="text-price-filter-max-text">815</span>	
					<input class="input-text text-price-filter hidden" id="price-filter-min-text" type="text" value="12">
					<input class="input-text text-price-filter hidden" id="price-filter-max-text" type="text" value="815">
				</div>
			</div>
		</div>