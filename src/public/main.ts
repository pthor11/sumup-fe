import { AuthClient } from "@dfinity/auth-client";

let authClient: AuthClient;

async function initAuthClient() {
    authClient = await AuthClient.create();
    
    if (await authClient.isAuthenticated()) {
        handleAuthenticated(authClient);
    } else {
        authClient.login({
            identityProvider: "https://identity.ic0.app",
            onSuccess: () => {
                handleAuthenticated(authClient);
            }
        });
    }
}

function handleAuthenticated(authClient: AuthClient) {
    const identity = authClient.getIdentity();
    const principal = identity.getPrincipal();

    document.getElementById("principalId")!.innerText = `Connected as: ${principal.toText()}`;
}

document.getElementById("connectButton")!.addEventListener("click", initAuthClient);
