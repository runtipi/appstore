### Official list of apps that are going to be added to this app store

| App Name      | Added |
| ------------- | ----- |
| adguard       | yes   |
| bazarr        | yes   |
| code-server   | yes   |
| deluge        | yes   |
| filebrowser   | yes   |
| homarr        | yes   |
| homepage      | yes   |
| immich        | no   |
| invidious     | yes   |
| it-tools      | yes   |
| jackett       | yes   |
| jellyfin      | yes   |
| lidarr        | yes   |
| navidrome     | yes   |
| nextcloud     | yes   |
| ollama        | yes   |
| onedev        | yes   |
| open-webui    | yes   |
| pihole        | yes   |
| plausible     | yes   |
| plex          | yes   |
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
| gitea         | no    |

### Required compose generation featurs missing from runtipi

- Multiple ports

```json
"addPorts": [
    {
        "containerPort": 80, // required
        "hostPort": 80, // required
        "tcp": true, // required
        "udp": true // required
    }
]
```

- Read only in volumes

```json
"volumes": [
    {
        "containerPath": "/hello", // required
        "hostPath": "/hello", // required
        "readOnly": true,
    }
]
```

- Arch specific compose files

```
docker-compose.json // x86
docker-compose.arm64.json // arm64
```

- Internal port shouldn't required if the service is not main

- Network mode support

```json
"network_mode": "host"
```
