### Official list of apps that are going to be added to this app store

| App Name      | Added |
| ------------- | ----- |
| adguard       | yes   |
| bazarr        | yes   |
| code-server   | yes   |
| deluge        | no    |
| filebrowser   | yes   |
| glance        | yes   |
| homarr        | no    |
| homepage      | no    |
| invidious     | no    |
| it-tools      | no    |
| jackett       | no    |
| jellyfin      | no    |
| lidarr        | no    |
| navidrome     | no    |
| nextcloud     | no    |
| ollama-cpu    | no    |
| ollama-amd    | no    |
| ollama-nvidia | no    |
| onedev        | no    |
| open-webui    | no    |
| pihole        | no    |
| plausible     | no    |
| plex          | no    |
| portainer     | no    |
| prowlarr      | no    |
| qbitorrent    | no    |
| radarr        | no    |
| sonarr        | no    |
| tailscale     | no    |
| transimission | no    |
| uptime-kuma   | no    |
| vaultwarden   | no    |
| wg-easy       | no    |
| zerotier      | no    |
| lodestone     | no    |

### Required compose generation featurs missing from runtipi

- Multiple ports

```json
"addPorts": [
    "8080": ["8080","tcp","udp"]
]
```

- Read only in volumes

```json
"volumes": [
    {
        "containerPath": "/hello",
        "hostPath": "/hello",
        "readOnly": true,
    }
]
```
