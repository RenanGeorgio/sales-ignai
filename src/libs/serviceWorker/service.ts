// @ts-nocheck
import dotenv from 'dotenv';
dotenv.config(); 

const isLocalhost = Boolean(
  window.location.hostname === 'localhost'
  || window.location.hostname === '[::1]'
  || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

export function register(config) {
  if (process.env.NODE_ENV === 'production') {
    if (('serviceWorker' in navigator) && (window?.workbox != undefined)) {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

      if (publicUrl.origin !== window.location.origin) {
        // O service worker nao vai funcionar se PUBLIC_URL esta em uma origem diferente da que serve a pagina
        return;
      }

      window.addEventListener('load', () => {
        // @ts-ignore
        const wb = window?.workbox;

        if (isLocalhost) {
          checkValidServiceWorker(wb, swUrl, config);

          navigator.serviceWorker.ready.then(() => {
            console.log('This web app is being served cache-first by a service');
          });
        } else {
          registerValidSW(wb, swUrl, config);
        }
      });
    }
  }
}

function registerValidSW(wb, swUrl, config) {
  (async () => {
    try {
      if (process.env.NODE_ENV !== 'production') {
        wb.addEventListener('installed', (event) => {
          console.log(`Event ${event.type} is triggered.`)
          console.log(event)
        })

        wb.addEventListener('controlling', (event) => {
          console.log(`Event ${event.type} is triggered.`)
          console.log(event)
        })

        wb.addEventListener('activated', (event) => {
          console.log(`Event ${event.type} is triggered.`)
          console.log(event)
        })

        const promptNewVersionAvailable = (event) => {
          // `event.wasWaitingBeforeRegister` será false se esta for a primeira vez que o service worker atualizado está esperando.
          // Quando `event.wasWaitingBeforeRegister` é verdadeiro, um service worker atualizado anteriormente ainda está esperando.
          // Você pode querer personalizar o prompt da interface do usuário de acordo.
          if (confirm('Uma versão mais recente deste aplicativo da web está disponível, recarregar para atualizar?')) {
            wb.addEventListener('controlling', (event) => {
              window.location.reload()
            })

            // Envia uma mensagem para o service worker em espera, instruindo-o a ativar.
            wb.messageSkipWaiting()
          } else {
            console.log(
              'O usuário rejeitou o recarregamento do aplicativo da Web. Continue usando a versão antiga. A nova versão será carregada automaticamente quando o usuário abrir o aplicativo na próxima vez.'
            )
          }
        }

        wb.addEventListener('waiting', promptNewVersionAvailable)

        wb.addEventListener('message', (event) => {
          if (event.data && event.data.type === 'SKIP_WAITING') {
            // @ts-ignore
            self?.skipWaiting();
          }

          console.log(`Event ${event.type} is triggered.`)
          console.log(event)
        })

        /*
        wb.addEventListener('redundant', event => {
          console.log(`Event ${event.type} is triggered.`)
          console.log(event)
        })

        wb.addEventListener('externalinstalled', event => {
          console.log(`Event ${event.type} is triggered.`)
          console.log(event)
        })

        wb.addEventListener('externalactivated', event => {
          console.log(`Event ${event.type} is triggered.`)
          console.log(event)
        })
        */
      } 
    } catch (err) {
      console.log('😥 Falha no registro do Service worker: ', err);
    }  
  })();

  navigator.serviceWorker.register(swUrl).then((registration) => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            console.log('New content is available and will be used when all');

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            console.log('Content is cached for offline use.');

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };

      if (navigator.storage && navigator.storage.persist) {
        (async () => {
          const result = await navigator.storage.persist();
          console.log(`Data persisted: ${result}`);
        })();
      }
    };
  }).catch((error) => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(wb, swUrl, config) {
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  }).then((response) => {
    const contentType = response.headers.get('content-type');

    if ((response.status === 404) || ((contentType != null) && (contentType.indexOf('javascript') === -1))) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      registerValidSW(wb, swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    }).catch((error) => {
        console.error(error.message);
    });
  }
}