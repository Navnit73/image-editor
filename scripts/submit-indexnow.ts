import { enPages } from '../content/en-pages';
import { dePages } from '../content/de-pages';
import { esPages } from '../content/es-pages';
import { frPages } from '../content/fr-pages';

async function submitToIndexNow() {
  const HOST = 'photoresizerai.com';
  const KEY = '992ef264e57e4ba2abe185a786b8b1e9';
  const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
  
  // Base URLs
  const urlList: string[] = [
    `https://${HOST}/`,
    `https://${HOST}/de`,
    `https://${HOST}/es`,
    `https://${HOST}/fr`,
    `https://${HOST}/tools`,
    `https://${HOST}/de/tools`,
    `https://${HOST}/canvas-photo-collage-maker`,
  ];

  // Map slugs for English
  enPages.forEach(page => {
    urlList.push(`https://${HOST}/${page.slug}`);
  });

  // Map slugs for German
  dePages.forEach(page => {
    urlList.push(`https://${HOST}/de/${page.slug}`);
  });
  
  // Map slugs for Spanish
  esPages.forEach(page => {
    urlList.push(`https://${HOST}/es/${page.slug}`);
  });
  
  // Map slugs for French
  frPages.forEach(page => {
    urlList.push(`https://${HOST}/fr/${page.slug}`);
  });
  
  console.log(`Found ${urlList.length} total URLs to submit to IndexNow.`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList
  };

  console.log('Submitting to IndexNow API...');
  
  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    console.log(`Response Status: ${response.status} ${response.statusText}`);
    
    if (response.status === 200 || response.status === 202) {
      console.log('✅ URLs submitted successfully to IndexNow.');
    } else {
      console.error('❌ Failed to submit URLs to IndexNow.');
      const text = await response.text();
      console.error(text);
    }
  } catch (error) {
    console.error('Error submitting to IndexNow:', error);
  }
}

submitToIndexNow();
