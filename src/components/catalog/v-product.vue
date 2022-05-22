<template>
	<div class="v-product" v-if="product">
		<div class="container mt-3">
			<page-loader v-if="loading" />
			<div class="row">
				<div class="col-md-6">
					<div
						class="vImgTabs d-flex flex-column flex-md-row align-items-center"
					>
						<div
							class="vImgTabs_nav order-md-0 order-1 me-2 d-flex flex-row justify-content-between flex-md-column"
						>
							<div
								class="vImgTabs_item"
								v-for="(tabImage, i) in tabImages"
								:key="i"
								:class="{ vTabsImg_item_active: i === activeTabImg }"
								@click="setActiveImg(i)"
							>
								<div class="item_img">
									<img :src="product.image" alt="" />
									{{ tabImage.id }}
								</div>
							</div>
						</div>
						<div class="vImgTabContent">
							<div
								class="tab_pane_img"
								v-for="(tabImage, i) in tabImages"
								:key="i"
								v-show="isActiveImg(i)"
							>
								<div class="pane_img">
									<img :src="product.image" alt="" />
									<span>{{ tabImage.id }}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="product_content">
						<span
							style="
								font-size: 26px;
								font-weight: 400;
								line-height: 35px;
								display: block;
								margin-bottom: 15px;
							"
						>
							{{ product.title }}
						</span>
						<span
							style="
								font-weight: 500;
								font-size: 20px;
								line-height: 26px;
								text-transform: capitalize;
								color: #a18a68;
								display: block;
								margin-bottom: 30px;
							"
							>$ {{ product.price }}
						</span>
						<div class="d-flex align-items-center mb-3">
							<el-rate disabled show-scores disabled-void-color="#000">
							</el-rate>
							<span
								style="
									font-weight: 400;
									font-size: 16px;
									line-height: 27px;
									color: #707070;
									margin-left: 10px;
								"
								>1 customer review</span
							>
						</div>
						<p
							style="
								font-weight: 400;
								font-size: 16px;
								line-height: 27px;
								color: #707070;
								margin-bottom: 30px;
							"
						>
							{{ product.description }}
						</p>
						<div class="d-flex align-items-center justify-content-between mb-5">
							<div class="quantity">
								<span style="cursor: pointer" @click="decrement(product)">-</span>
								<span class="mx-1" style="cursor: not-allowed">{{ 1 }}</span>
								<span style="cursor: pointer" @click="increment(product)">+</span>
							</div>
							<div class="cart_btn">
								<button @click="addToCart()">ADD TO CART</button>
							</div>
						</div>
						<div class="d-flex align-items-center mb-5 icons">
							<svg
								width="20"
								height="18"
								viewBox="0 0 20 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M9.88013 2.01405C11.0249 0.77861 12.6287 0.0520888 14.3262 0C17.3273 0 19.7603 2.39588 19.7603 5.35135C19.7603 8.85038 15.8104 12.6852 13.4415 14.9851C13.2282 15.1921 13.0278 15.3868 12.8442 15.5676L10.5915 17.7859C10.4527 17.9228 10.2643 17.9998 10.0678 18H9.6924C9.49594 17.9998 9.30759 17.9228 9.16876 17.7859L6.91609 15.5676C6.73248 15.3868 6.53202 15.1921 6.31874 14.9851C3.94983 12.6852 0 8.85038 0 5.35135C0 2.39588 2.43292 0 5.43407 0C7.13157 0.0520888 8.73538 0.77861 9.88013 2.01405ZM9.88027 15.7328L12.0539 13.6215C14.0596 11.6756 17.7844 8.03664 17.7844 5.35123C17.7844 4.44299 17.416 3.57235 16.7611 2.93287C16.1061 2.29339 15.2189 1.93805 14.2967 1.94583C12.7606 2.08626 11.3741 2.91055 10.5324 4.18367C10.4381 4.30499 10.2923 4.37677 10.1372 4.37826H9.69255C9.46171 4.37765 9.24364 4.27385 9.09974 4.0961C8.27139 2.8699 6.92358 2.07925 5.43421 1.94583C3.52439 1.94583 1.97617 3.47048 1.97617 5.35123C1.97617 8.03664 5.70098 11.6756 7.70664 13.6215L9.88027 15.7328Z"
									fill="#707070"
								/>
							</svg>
							<span class="mx-4"
								><svg
									width="1"
									height="20"
									viewBox="0 0 1 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line
										x1="0.5"
										y1="2.18557e-08"
										x2="0.499999"
										y2="19.4965"
										stroke="#D8D8D8"
									/>
								</svg>
							</span>
							<div class="d-flex icon_logo">
								<svg
									width="22"
									height="18"
									viewBox="0 0 22 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M19.125 0.947266H2.125C0.951395 0.947266 0 1.84859 0 2.96043V15.0394C0 16.1512 0.951395 17.0526 2.125 17.0526H19.125C20.2986 17.0526 21.25 16.1512 21.25 15.0394V2.96043C21.25 1.84859 20.2986 0.947266 19.125 0.947266ZM19.125 2.96045V5.87953L11.3156 11.0634C10.9003 11.3365 10.3497 11.3365 9.93437 11.0634L2.125 5.87953V2.96045H19.125ZM2.125 7.99332V15.0394H19.125V7.99332L12.3781 12.4626C11.3252 13.1598 9.92476 13.1598 8.87187 12.4626L2.125 7.99332Z"
										fill="#707070"
									/>
								</svg>
								<svg
									width="10"
									height="18"
									viewBox="0 0 10 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9.5 2.84211H6.5C5.94772 2.84211 5.5 3.26626 5.5 3.78948V6.63159H9.5C9.61374 6.62919 9.7216 6.67932 9.78923 6.766C9.85685 6.85267 9.87578 6.96507 9.84 7.06738L9.1 9.15159C9.03181 9.34288 8.84312 9.47219 8.63 9.47369H5.5V16.579C5.5 16.8406 5.27614 17.0526 5 17.0526H2.5C2.22386 17.0526 2 16.8406 2 16.579V9.47369H0.5C0.223858 9.47369 0 9.26162 0 9.00001V7.10527C0 6.84366 0.223858 6.63159 0.5 6.63159H2V3.78948C2 1.69661 3.79086 0 6 0H9.5C9.77614 0 10 0.212076 10 0.473685V2.36842C10 2.63003 9.77614 2.84211 9.5 2.84211Z"
										fill="#707070"
									/>
								</svg>
								<svg
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M13 0.947266H5C2.23858 0.947266 0 3.06802 0 5.68411V13.2631C0 15.8792 2.23858 17.9999 5 17.9999H13C15.7614 17.9999 18 15.8792 18 13.2631V5.68411C18 3.06802 15.7614 0.947266 13 0.947266ZM16.25 13.2631C16.2445 14.9614 14.7926 16.3369 13 16.3421H5C3.20735 16.3369 1.75549 14.9614 1.75 13.2631V5.68413C1.75549 3.98583 3.20735 2.61037 5 2.60517H13C14.7926 2.61037 16.2445 3.98583 16.25 5.68413V13.2631ZM13.75 5.92094C14.3023 5.92094 14.75 5.49679 14.75 4.97358C14.75 4.45038 14.3023 4.02623 13.75 4.02623C13.1977 4.02623 12.75 4.45038 12.75 4.97358C12.75 5.49679 13.1977 5.92094 13.75 5.92094ZM8.99999 5.21051C6.51472 5.21051 4.5 7.11918 4.5 9.47365C4.5 11.8281 6.51472 13.7368 8.99999 13.7368C11.4853 13.7368 13.5 11.8281 13.5 9.47365C13.5027 8.34223 13.0294 7.25641 12.1849 6.45637C11.3404 5.65633 10.1943 5.20799 8.99999 5.21051ZM6.25 9.47361C6.25 10.9125 7.48122 12.0789 9 12.0789C10.5188 12.0789 11.75 10.9125 11.75 9.47361C11.75 8.03477 10.5188 6.86835 9 6.86835C7.48122 6.86835 6.25 8.03477 6.25 9.47361Z"
										fill="#707070"
									/>
								</svg>
								<svg
									width="20"
									height="18"
									viewBox="0 0 20 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19.9708 3.28138C19.4547 3.9335 18.8309 4.50235 18.1235 4.96596C18.1235 5.13632 18.1235 5.30667 18.1235 5.48648C18.1292 8.58004 16.8249 11.5464 14.5029 13.7205C12.181 15.8945 9.03567 17.0945 5.77211 17.0514C3.88538 17.0574 2.02281 16.6493 0.330301 15.859C0.239042 15.8212 0.18018 15.7357 0.180527 15.6413V15.5372C0.180527 15.4013 0.296758 15.2911 0.440136 15.2911C2.29475 15.2332 4.0832 14.624 5.55244 13.5498C3.87376 13.5177 2.36338 12.5756 1.66829 11.127C1.63318 11.0479 1.64411 10.9571 1.69713 10.8875C1.75016 10.818 1.83761 10.7796 1.9279 10.7863C2.43809 10.8349 2.95337 10.7899 3.44561 10.6538C1.59249 10.2894 0.200074 8.8319 0.000797149 7.04803C-0.00628542 6.96246 0.0341943 6.87957 0.107613 6.82931C0.181031 6.77906 0.276775 6.76869 0.360256 6.80197C0.857554 7.00986 1.39439 7.11935 1.93788 7.12375C0.314106 6.11407 -0.387258 4.19364 0.230452 2.44855C0.294214 2.27898 0.447402 2.15371 0.633723 2.11878C0.820043 2.08385 1.01201 2.14441 1.13908 2.2782C3.33027 4.48754 6.34099 5.80407 9.53645 5.95022C9.4546 5.6408 9.41434 5.32281 9.41663 5.00382C9.44652 3.33119 10.5389 1.84117 12.1825 1.23134C13.826 0.621516 15.6953 1.01257 16.9153 2.22142C17.747 2.07133 18.551 1.80669 19.3018 1.43591C19.3568 1.40338 19.4265 1.40338 19.4815 1.43591C19.5158 1.48803 19.5158 1.55413 19.4815 1.60626C19.1178 2.39518 18.5035 3.05687 17.7241 3.49905C18.4066 3.42407 19.0771 3.27155 19.7211 3.04478C19.7754 3.00981 19.8466 3.00981 19.9009 3.04478C19.9463 3.06447 19.9802 3.10212 19.9937 3.14771C20.0072 3.1933 19.9988 3.2422 19.9708 3.28138Z"
										fill="#707070"
									/>
								</svg>
							</div>
						</div>
						<span
							style="
								font-weight: 400;
								font-size: 16px;
								line-height: 27px;
								color: #000000;
								display: block;
								margin-bottom: 10px;
							"
						>
							SKU:
							<span style="color: #707070; font-size: 16px; line-height: 27px">
								12</span
							>
						</span>
						<span
							style="
								font-weight: 400;
								font-size: 16px;
								line-height: 27px;
								color: #000000;
							"
							>Categories:
							<span
								style="color: #707070; font-size: 16px; line-height: 27px"
								>{{ product.category }}</span
							>
						</span>
					</div>
				</div>
			</div>

			<div class="vTabs mt-4">
				<div class="vTabs_nav">
					<div
						class="vTabs_item"
						v-for="(tab, index) in tabs"
						:key="index"
						:class="{ vTabs_item_active: index === activeTab }"
						@click="setActive(index)"
					>
						{{ tab.title }}
					</div>
				</div>
				<div class="tabs_content">
					<div class="tab_pane" v-show="isActive(0)">
						{{ product.description }}
					</div>
					<div class="tab_pane" v-show="isActive(1)">
						<ul class="aditial_info">
							<li>Weight: <span> 0.3 kg</span></li>
							<li>Dimentions: <span> 15 x 20 x 1sm</span></li>
							<li>Colours: <span> Yellow</span></li>
							<li>Material: <span> Metal</span></li>
						</ul>
					</div>
					<div class="tab_pane" v-show="isActive(2)">
						<div class="row">
							<div class="col-md-6">
								<div class="rewievs">
									<p class="rewievs_title mb-5">
										{{ rewievs.length }} Reviews for lira earings
									</p>

									<div v-for="(rewiev, i) in rewievs" :key="i">
										<div class="mt-3">
											<div class="d-flex align-items-center mb-3">
												<p
													class="rewievs_title me-2 mb-0"
													@click="removeCommet(i)"
												>
													{{ rewiev.name }}
												</p>
												<span> {{ rewiev.date }} </span>
											</div>
											<svg
												width="130"
												height="18"
												viewBox="0 0 130 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<g clip-path="url(#clip0_988_1209)">
													<path
														d="M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1302 6.24709L11.9341 5.77536L9.88059 0.967661C9.72898 0.614445 9.384 0.386475 9.00002 0.386475C8.61605 0.386475 8.27093 0.614445 8.12028 0.967661L6.06676 5.77536L0.869868 6.24709C0.488911 6.28225 0.166319 6.54029 0.0471156 6.90409C-0.0714014 7.26856 0.0380517 7.66833 0.326173 7.92102L4.25399 11.3652L3.09587 16.4659C3.01114 16.841 3.15671 17.2288 3.4679 17.4537C3.63517 17.5753 3.83169 17.636 4.0289 17.636C4.19837 17.636 4.36797 17.5909 4.51945 17.5003L9.00002 14.8212L13.4798 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9042 16.4659L13.7461 11.3652L17.6739 7.92102C17.9619 7.66833 18.0714 7.26939 17.9529 6.90409Z"
														fill="black"
													/>
												</g>
												<g clip-path="url(#clip1_988_1209)">
													<path
														d="M73.9529 6.90409C73.8344 6.53961 73.5111 6.28156 73.1302 6.24709L67.9341 5.77536L65.8806 0.967661C65.729 0.614445 65.384 0.386475 65 0.386475C64.616 0.386475 64.2709 0.614445 64.1203 0.967661L62.0668 5.77536L56.8699 6.24709C56.4889 6.28225 56.1663 6.54029 56.0471 6.90409C55.9286 7.26856 56.0381 7.66833 56.3262 7.92102L60.254 11.3652L59.0959 16.4659C59.0111 16.841 59.1567 17.2288 59.4679 17.4537C59.6352 17.5753 59.8317 17.636 60.0289 17.636C60.1984 17.636 60.368 17.5909 60.5194 17.5003L65 14.8212L69.4798 17.5003C69.8084 17.6967 70.2216 17.6787 70.5321 17.4537C70.8433 17.2288 70.9889 16.841 70.9042 16.4659L69.7461 11.3652L73.6739 7.92102C73.9619 7.66833 74.0714 7.26939 73.9529 6.90409Z"
														fill="black"
													/>
												</g>
												<g clip-path="url(#clip2_988_1209)">
													<path
														d="M45.9529 6.90409C45.8344 6.53961 45.5111 6.28156 45.1302 6.24709L39.9341 5.77536L37.8806 0.967661C37.729 0.614445 37.384 0.386475 37 0.386475C36.616 0.386475 36.2709 0.614445 36.1203 0.967661L34.0668 5.77536L28.8699 6.24709C28.4889 6.28225 28.1663 6.54029 28.0471 6.90409C27.9286 7.26856 28.0381 7.66833 28.3262 7.92102L32.254 11.3652L31.0959 16.4659C31.0111 16.841 31.1567 17.2288 31.4679 17.4537C31.6352 17.5753 31.8317 17.636 32.0289 17.636C32.1984 17.636 32.368 17.5909 32.5194 17.5003L37 14.8212L41.4798 17.5003C41.8084 17.6967 42.2216 17.6787 42.5321 17.4537C42.8433 17.2288 42.9889 16.841 42.9042 16.4659L41.7461 11.3652L45.6739 7.92102C45.9619 7.66833 46.0714 7.26939 45.9529 6.90409Z"
														fill="black"
													/>
												</g>
												<g clip-path="url(#clip3_988_1209)">
													<path
														d="M101.085 6.74504L101.085 6.74506C101.266 6.76146 101.42 6.88398 101.477 7.05839C101.534 7.23412 101.482 7.42451 101.344 7.54519L97.4164 10.9892L97.1925 11.1855L97.2585 11.4759L98.4165 16.5761C98.4573 16.757 98.3872 16.9416 98.2392 17.0485L98.2388 17.0488C98.0903 17.1564 97.8933 17.165 97.7363 17.0711L93.2567 14.3921L93 14.2387L92.7434 14.3921L88.2629 17.0712L88.2627 17.0712C88.1902 17.1146 88.1096 17.136 88.0289 17.136C87.9346 17.136 87.8415 17.1071 87.7618 17.0492L87.7608 17.0485C87.6129 16.9416 87.5428 16.7571 87.5835 16.5763C87.5836 16.5762 87.5836 16.5762 87.5836 16.5761L88.7416 11.4759L88.8075 11.1855L88.5836 10.9892L84.6559 7.54511C84.6558 7.5451 84.6558 7.54509 84.6558 7.54508C84.5185 7.42461 84.4659 7.23389 84.5224 7.05923C84.5799 6.88453 84.7341 6.76192 84.9154 6.74502C84.9155 6.745 84.9157 6.74499 84.9158 6.74498L90.112 6.27331L90.4093 6.24632L90.5266 5.97176L92.5801 1.16406L92.5802 1.16382C92.6522 0.994891 92.8164 0.886475 93 0.886475C93.1832 0.886475 93.3478 0.994537 93.4209 1.16443C93.421 1.16458 93.4211 1.16473 93.4211 1.16488L95.4743 5.97176L95.5916 6.24632L95.8889 6.27331L101.085 6.74504Z"
														stroke="black"
													/>
												</g>
												<g clip-path="url(#clip4_988_1209)">
													<path
														d="M129.085 6.74504L129.085 6.74506C129.266 6.76146 129.42 6.88398 129.477 7.05839C129.534 7.23412 129.482 7.42451 129.344 7.54519L125.416 10.9892L125.193 11.1855L125.258 11.4759L126.416 16.5761C126.457 16.757 126.387 16.9416 126.239 17.0485L126.239 17.0488C126.09 17.1564 125.893 17.165 125.736 17.0711L121.257 14.3921L121 14.2387L120.743 14.3921L116.263 17.0712L116.263 17.0712C116.19 17.1146 116.11 17.136 116.029 17.136C115.935 17.136 115.841 17.1071 115.762 17.0492L115.761 17.0485C115.613 16.9416 115.543 16.7571 115.584 16.5763C115.584 16.5762 115.584 16.5762 115.584 16.5761L116.742 11.4759L116.808 11.1855L116.584 10.9892L112.656 7.54511C112.656 7.5451 112.656 7.54509 112.656 7.54508C112.518 7.42461 112.466 7.23389 112.522 7.05923C112.58 6.88453 112.734 6.76192 112.915 6.74502C112.916 6.745 112.916 6.74499 112.916 6.74498L118.112 6.27331L118.409 6.24632L118.527 5.97176L120.58 1.16406L120.58 1.16382C120.652 0.994891 120.816 0.886475 121 0.886475C121.183 0.886475 121.348 0.994537 121.421 1.16443C121.421 1.16458 121.421 1.16473 121.421 1.16488L123.474 5.97176L123.592 6.24632L123.889 6.27331L129.085 6.74504Z"
														stroke="black"
													/>
												</g>
												<defs>
													<clipPath id="clip0_988_1209">
														<rect width="18" height="18" fill="white" />
													</clipPath>
													<clipPath id="clip1_988_1209">
														<rect
															width="18"
															height="18"
															fill="white"
															transform="translate(56)"
														/>
													</clipPath>
													<clipPath id="clip2_988_1209">
														<rect
															width="18"
															height="18"
															fill="white"
															transform="translate(28)"
														/>
													</clipPath>
													<clipPath id="clip3_988_1209">
														<rect
															width="18"
															height="18"
															fill="white"
															transform="translate(84)"
														/>
													</clipPath>
													<clipPath id="clip4_988_1209">
														<rect
															width="18"
															height="18"
															fill="white"
															transform="translate(112)"
														/>
													</clipPath>
												</defs>
											</svg>
											<p class="rewievs_text">
												{{ rewiev.rewiev }}
											</p>
										</div>
										<hr />
									</div>
								</div>
							</div>
							<div class="col-md-6 item-x">
								<div class="rewievs_item">
									<p class="rewievs_title">Add a Review</p>
									<p class="rewievs_text mb-5">
										Your email address will not be published. Required fields
										are marked *
									</p>
									<p class="rewievs_text" style="margin-bottom: 30px">
										Your Review
									</p>
									<hr class="hr" />
									<form @submit.prevent>
										<div class="form_group">
											<input
												type="text"
												v-model="name"
												placeholder="Enter your name*"
											/>
										</div>
										<div class="form_group">
											<input
												type="email"
												v-model="email"
												placeholder="Enter your email*"
											/>
										</div>
										<div class="form_group">
											<input
												type="text"
												v-model="rewiev"
												placeholder="Your Review*"
											/>
										</div>
										<div class="d-flex align-items-center">
											<input
												class="form-check-input me-2 mt-0"
												type="checkbox"
												id="check"
											/>
											<label
												class="form-check-label"
												style="flex: 1"
												for="check"
											>
												Save my name, email, and website in this browser for the
												next time I comment
											</label>
										</div>
										<button class="btn_submit" @click="newCommet">
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import PageLoader from '../PageLoader.vue';
export default {
	components: { PageLoader },
	name: 'v-product',
	props: {},
	data() {
		return {
			product: null,
			tabs: [
				{ title: 'Description', content: 'Description' },
				{ title: 'Aditional information', content: 'Aditional information' },
				{ title: `Reviews`, content: 'Reviews' },
			],
			tabImages: [
				{ id: 0, src: 'https://via.placeholder.com/300x300' },
				{ id: 1, src: 'https://via.placeholder.com/300x300' },
				{ id: 2, src: 'https://via.placeholder.com/300x300' },
				{ id: 3, src: 'https://via.placeholder.com/300x300' },
			],
			activeTab: 0,
			activeTabImg: 0,

			name: '',
			rewiev: '',
			email: '',
		};
	},
	computed: {},
	async created() {
		this.$route.params.id;
		this.loading = true;
		axios
			.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
			.then(res => {
				this.product = res.data;
				this.loading = false;
			});
	},
	methods: {
		setActive(tab) {
			this.activeTab = tab;
		},
		isActive(tab) {
			return this.activeTab === tab;
		},
		setActiveImg(tabImg) {
			this.activeTabImg = tabImg;
		},
		isActiveImg(tabImg) {
			return this.activeTabImg === tabImg;
		},
		
		increment(quantity_product) {
			this.$store.dispatch('increment', quantity_product);
			console.log(quantity_product);
		},
		decrement(quantity_product) {
			this.$store.dispatch('decrement', quantity_product);
			console.log(quantity_product);
		},
		addToCart() {
			this.$store.dispatch('addToCart', {
				product: this.product,
				quantity: 1,
			});
		},
		newCommet() {
			const rewiev = {
				name: this.name,
				rewiev: this.rewiev,
				date: '12.12.2019',
			};
			if (this.name && this.rewiev && this.email) {
				this.rewievs.push(rewiev);
				localStorage.setItem('rewievs', JSON.stringify(this.rewievs));
				this.name = '';
				this.rewiev = '';
				this.email = '';
			}
		},
		removeCommet(index) {
			this.rewievs.splice(index, 1);
			localStorage.setItem('rewievs', JSON.stringify(this.rewievs));
		},
	},
	async mounted() {
		const data = await localStorage.getItem('rewievs');
		data ? (this.rewievs = JSON.parse(data)) : null;
	},
};
</script>
<style scoped>
.cart_btn {
	display: flex;
	flex: 1;
	margin-left: 20px;
}
.cart_btn button {
	background: #ffffff;
	border: 1px solid #000000;
	color: #000000;
	font-weight: 700;
	font-size: 16px;
	line-height: 21px;
	border-radius: 4px;
	padding: 10px;
	width: 100%;
}
.btn_submit {
	background: #000;
	border: 1px solid #000000;
	color: #fff;
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	border-radius: 4px;
	padding: 10px 20px;
	margin-top: 20px;
}
.icons svg {
	cursor: pointer;
}

.icon_logo svg {
	margin-right: 20px;
}
/* tab */
.vTabs_nav {
	display: flex;
	position: relative;
	margin-bottom: 40px;
}
.vTabs_nav::after {
	content: '';
	position: absolute;
	bottom: -20px;
	left: 0;
	width: 100%;
	height: 1px;
	background: #d8d8d8;
}
.vTabs_nav .vTabs_item {
	font-size: 20px;
	font-weight: 400;
	color: #707070;
	margin-right: 30px;
	cursor: pointer;
}
.vTabs_item_active {
	color: #000 !important;
	position: relative;
}
.vTabs_item_active::after {
	content: '';
	position: absolute;
	bottom: -20px;
	left: 0;
	width: 100%;
	height: 2px;
	background: #000;
}
.tabs_content .tab_pane {
	font-size: 16px;
	color: #707070;
	line-height: 27px;
	font-weight: 400;
}
.vImgTabs_item {
	width: 100px;
	height: 100px;
	padding: 10px;
	border: 1px solid #d8d8d8;
	border-radius: 5px;
	cursor: pointer;
	margin-bottom: 10px;
}
.vImgTabs_item .item_img {
	width: 100%;
	height: 100%;
}
.vImgTabs_item .item_img img {
	width: 100%;
	height: 100%;
}
.vTabsImg_item_active {
	border: 1px solid #707070;
}

.vImgTabContent .tab_pane_img {
	width: 100%;
	height: 430px;
	background-color: #d8d8d8;
	padding: 20px;
	border-radius: 5px;
}
.vImgTabContent .tab_pane_img .pane_img {
	width: 100%;
	height: 100%;
}
.vImgTabContent .tab_pane_img .pane_img img {
	width: 100%;
	height: 100%;
}
.aditial_info {
	padding-left: 0 !important;
}
.aditial_info li {
	font-size: 16px;
	color: #000;
	font-weight: 500;
}
.aditial_info li span {
	font-weight: 400;
	color: #707070;
	margin-left: 5px;
}
.rewievs_title {
	font-size: 20px;
	color: #000;
	font-weight: 500;
}
.rewievs span {
	font-size: 14px;
	color: #707070;
	font-weight: 400;
}
.rewievs .rewievs_text {
	font-size: 16px;
	line-height: 27px;
	color: #707070;
	font-weight: 400;
	margin-top: 20px;
	margin-bottom: 30px;
}
.hr {
	margin-bottom: 42px;
}
.form_group {
	margin-bottom: 30px;
}
.form_group input {
	outline: none;
	border: none;
	border-bottom: 1px solid #d8d8d8;
	width: 100%;
	font-size: 16px;
	color: #707070;
	font-weight: 400;
}
@media (min-width: 768px) {
	.rewievs_item {
		position: sticky;
		top: 150px;
		z-index: 1;
	}
}
@media (max-width: 768px) {
	.vImgTabContent .tab_pane_img {
		height: 330px;
	}
	.hr {
		margin-bottom: 20px;
	}
	.vTabs_nav .vTabs_item {
		font-size: 16px;
		font-weight: 500;
		margin-top: 20px;
		margin-right: 15px;
	}
	.vImgTabs_nav {
		width: 100%;
		margin-bottom: 20px;
	}
	.vImgTabs_item {
		width: 60px;
		height: 60px;
		margin-bottom: 0;
	}
	.vImgTabContent .tab_pane_img {
		height: 370px;
	}
	.tab_pane_img {
		margin: 20px 0;
	}
}
</style>
