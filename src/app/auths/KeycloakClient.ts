import Keycloak from "keycloak-js";

class KeycloakClient {
  constructor() {
    const confs = {
      url: "http://127.0.0.1:8080/", realm: "keycloak-auth-dbg", clientId: "app-www", onLoad: "login-required"
    }

    let client = new Keycloak(confs); // TODO(VIP): code ... fix
    client.init({ token: confs.onLoad }).then((auth) => {
      if (!auth) {
        window.location.reload();
      } else {
        console.log("Authenticated");
      }
    
    
    //Token Refresh
      setInterval(() => {
        client.updateToken(70).then((refreshed) => {
          if (refreshed) {
            console.log("Token refreshed" + refreshed);
          } else {
            console.log("Token not refreshed ---- invalid");
          }
        }).catch(() => {
          console.log("Failed to refresh token");
        });
      }, 6000)
    
    }).catch(() => {
      console.log("Authenticated Failed");
    });
  }
};