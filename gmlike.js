const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');
var chalk = require('chalk');
const delay = require('delay');
const fs = require('fs');
const randomUseragent = require('random-useragent');
console.log('\n'+chalk.green('[+] gmlikes by GygDoggy' + '\n'))
var email = readlineSync.question('[+] Email Regist : ');
var usdt = readlineSync.question('[+] input usdt : ');
/* var random_name = require('node-random-name');
        var name1 = random_name({
            first: true
        });
        var name2 = random_name({
            last: true
        }); */
        const $options = {
            waitUntil: 'networkidle2'
        };
		
(async () => {
	var browser = await puppeteer.launch({
		headless: true,
	});
	const page = await browser.newPage();
	await page.goto('https://www.gmlikes.com/#/pages/login/reg?sc=ck7cvKFd&prop=1', $options);
	
	/* coba masukin email | var email di line 8 */
	const daftarEmail = await page.type('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(1) > uni-input > div > input', email);
	console.log('\n'+chalk.green('[1] input email', email))
	await delay(2000)
	
	console.log('\n'+chalk.green('[2] set memo'))
	/* MEMO ABJAD 1 */
	const memo1 = await page.type('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(2) > uni-view.flex-center-between > uni-input:nth-child(1) > div > input', `1`);

	/* MEMO ABJAD 2 */
	const memo2 = await page.type('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(2) > uni-view.flex-center-between > uni-input:nth-child(2) > div > input', `2`);
	
	/* MEMO ABJAD 3 */
	const memo3 = await page.type('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(2) > uni-view.flex-center-between > uni-input:nth-child(3) > div > input', `3`);
	
	/* MEMO ABJAD 4 */
	const memo4 = await page.type('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(2) > uni-view.flex-center-between > uni-input:nth-child(4) > div > input', `4`);
	await delay(2000)
	
	console.log('\n'+chalk.green('[3] Menginput Sandi'))
	const sandi1 = await page.type('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(3) > input', `PakForlay1337`);
	console.log('\n'+chalk.green('[4] Berhasil Input sandi'))
	
	const sandi2 = await page.type('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(4) > input', `PakForlay1337`);
	console.log('\n'+chalk.green('[5] Mengulang input sandi'))
	await delay(2000)
	
	console.log('\n'+chalk.green('[6] Klik Register'))
	await page.waitForSelector('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.box-submit > uni-button');
	const nextDaftar = await page.$('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.box-submit > uni-button');
	await nextDaftar.click()
	await nextDaftar.dispose()
	await delay(2000)
	console.log('\n'+chalk.green('[7] Berhasil Register'))

	await page.goto('https://www.gmlikes.com/#/pages/task/task');
	await delay(2000)
	
	console.log('\n'+chalk.green('[8] Menerima Tugas'))
	await page.waitForSelector('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.flex_1.content > uni-swiper > div > div > div > uni-swiper-item:nth-child(1) > uni-scroll-view > div > div > div > uni-view:nth-child(1) > uni-view.receive.flex-center-between > uni-view.receive-box');
	const receivedTugas = await page.$('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.flex_1.content > uni-swiper > div > div > div > uni-swiper-item:nth-child(1) > uni-scroll-view > div > div > div > uni-view:nth-child(1) > uni-view.receive.flex-center-between > uni-view.receive-box');
	await receivedTugas.click()
	await receivedTugas.dispose()
	await delay(2000)
	console.log('\n'+chalk.green('[9] Berhasil Terima Tugas'))

	console.log('\n'+chalk.green('[10] Menjalankan Tugas'))
	await page.waitForSelector('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content.flex_1 > uni-swiper > div > div > div > uni-swiper-item:nth-child(1) > uni-scroll-view > div > div > div > uni-view > uni-view.more.flex-center > uni-navigator');
	const menjalankanTugas = await page.$('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content.flex_1 > uni-swiper > div > div > div > uni-swiper-item:nth-child(1) > uni-scroll-view > div > div > div > uni-view > uni-view.more.flex-center > uni-navigator');
	await menjalankanTugas.click()
	await menjalankanTugas.dispose()
	await delay(2000)
	
	await page.waitForSelector('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(2) > uni-view > uni-view.share_invite.flex-center-between > uni-navigator');
	const klikInvite = await page.$('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(2) > uni-view > uni-view.share_invite.flex-center-between > uni-navigator');
	await klikInvite.click()
	await klikInvite.dispose()
	await delay(2000)
	
	await page.waitForSelector('body > uni-app > uni-page > uni-page-head > div.uni-page-head > div.uni-page-head-hd > div');
	const klikBack = await page.$('body > uni-app > uni-page > uni-page-head > div.uni-page-head > div.uni-page-head-hd > div');
	await klikBack.click()
	await klikBack.dispose()
	await delay(2000)
	
	await page.waitForSelector('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.uni-head.flex-center-center > uni-view.back-box.flex-center-center');
	const klikHome = await page.$('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.uni-head.flex-center-center > uni-view.back-box.flex-center-center');
	await klikHome.click()
	await klikHome.dispose()
	await delay(2000)
	console.log('\n'+chalk.green('[11] Berhasil Menjalankan Tugas'))
	
	console.log('\n'+chalk.green('[12] Sett Address USDT'))
	await page.waitForSelector('body > uni-app > uni-tabbar > div.uni-tabbar > div:nth-child(6)');
	const klikProfile = await page.$('body > uni-app > uni-tabbar > div.uni-tabbar > div:nth-child(6)');
	await klikProfile.click()
	await klikProfile.dispose()
	await delay(2000)
	
	await page.waitForSelector('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.top.flex-center > uni-navigator:nth-child(1) > uni-image');
	const klikSetting = await page.$('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.top.flex-center > uni-navigator:nth-child(1) > uni-image');
	await klikSetting.click()
	await klikSetting.dispose()
	await delay(2000)
	
	await page.waitForSelector('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.centent > uni-navigator:nth-child(1)');
	const settUsdt = await page.$('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.centent > uni-navigator:nth-child(1)');
	await settUsdt.click()
	await settUsdt.dispose()
	await delay(2000)
	
	/* MEMO ABJAD 1 */
	const memo1lagi = await page.type('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(1) > uni-view.list-item.flex-center-between > uni-input:nth-child(1) > div > input', `1`);

	/* MEMO ABJAD 2 */
	const memo2lagi = await page.type('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(1) > uni-view.list-item.flex-center-between > uni-input:nth-child(2) > div > input', `2`);
	
	/* MEMO ABJAD 3 */
	const memo3lagi = await page.type('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(1) > uni-view.list-item.flex-center-between > uni-input:nth-child(3) > div > input', `3`);
	
	/* MEMO ABJAD 4 */
	const memo4lagi = await page.type('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(1) > uni-view.list-item.flex-center-between > uni-input:nth-child(4) > div > input', `4`);
	await delay(2000)
	
	const ketikUsdt = await page.type('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.content > uni-view:nth-child(2) > uni-view.list-item > uni-input > div > input', usdt);
	await delay(2000)
	
	await page.waitForSelector('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.box-submit > uni-button');
	const finishUsdt = await page.$('body > uni-app > uni-page > uni-page-wrapper > uni-page-body > uni-view > uni-view.box-submit > uni-button');
	await finishUsdt.click()
	await finishUsdt.dispose()
	await delay(2000)
	
	console.log('\n'+chalk.green('[13] Berhasil Sett USDT'))
	fs.appendFileSync("gmLikeAcc.txt", email + '|' + 'PakForlay1337' + '|' + '1234' + '|' + usdt + '\n');
	console.log('Berhasil simpan data!!');
	})();