      function openModal(modalId) {
        document.getElementById(modalId).style.display = "flex";
      }

      function closeModal(modalId) {
        document.getElementById(modalId).style.display = "none";
      }

      function addToCart(productName, productPrice) {
        const phoneNumber = '6281563424562';
        const message = `Halo, saya ingin membeli produk: ${productName} dengan harga Rp${productPrice}. Apakah stok masih tersedia?`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
      }

      function addToCartTl(productName, productPrice) {
        const botUsername = 'rerez_official';
        const message = `Halo, saya ingin membeli produk: ${productName} dengan harga Rp${productPrice}. Apakah stok masih tersedia?`;
        const url = `https://t.me/${botUsername}?start=${encodeURIComponent(message)}`;
        window.location.href = url;
      }

      // Store hours check
      const openHour = 8;
      const closeHour = 23;
      function updateStoreStatus() {
        const now = new Date();
        const currentHour = now.getHours();
        const storeStatus = document.getElementById("storeStatus");
        let isStoreOpen = false;

        if (currentHour >= openHour && currentHour < closeHour) {
          storeStatus.textContent = "Toko sedang buka";
          storeStatus.classList.add("open");
          storeStatus.classList.remove("closed");
          isStoreOpen = true;
        } else {
          storeStatus.textContent = "Toko sedang tutup";
          storeStatus.classList.add("closed");
          storeStatus.classList.remove("open");
        }
        return isStoreOpen;
      }

      window.onload = function() {
        const storeStatus = document.getElementById('storeStatus');
        const isStoreOpen = updateStoreStatus();
        if (!isStoreOpen) {
          storeStatus.style.backgroundColor = '#f2dede';
          storeStatus.style.color = '#a94442';
        } else {
          storeStatus.style.backgroundColor = '#dff0d8';
          storeStatus.style.color = '#3c763d';
        }
      };
      function searchPackage() {
        var input = document.getElementById('searchInput');
        var filter = input.value.toLowerCase();
        var panels = document.getElementsByClassName('panel package');
      
        for (var i = 0; i < panels.length; i++) {
          var panel = panels[i];
          var name = panel.getAttribute('data-name').toLowerCase();
          var description = panel.getAttribute('data-description').toLowerCase();
          
          if (name.includes(filter) || description.includes(filter)) {
            panel.style.display = ''; 
          } else {
            panel.style.display = 'none';
          }
        }
      }
