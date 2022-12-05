const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

   // Prevent the mini-infobar from appearing on mobile
   event.preventDefault();
   
   // Stash the event so it can be triggered later.
   window.deferredPrompt = event;
   
   // Show the install button
   butInstall.classList.toggle('hidden', false);   
});

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
   const promptEvent = window.deferredPrompt;
   if (!promptEvent) {
      // The deferred prompt isn't available.
      return;
   }
   // Show the install prompt.
   promptEvent.prompt();
   // Log the result
   const result = await promptEvent.userChoice;
   console.log('userChoice', result);
   // Reset the deferred prompt variable
   window.deferredPrompt = null;
   // Hide the install button.
   butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
   console.log('installed');
   window.deferredPrompt = null;
});
