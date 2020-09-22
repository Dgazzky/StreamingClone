export interface Movie {
    id: {
        label: string
    }
    category: {
        attributes: {
            label: string
        }
    }
    'im:image': Array<Image>
    'im:releaseDate': {}
    'im:price': {}
    link: {}
    summary: {
        label: string
    }
    'im:name': {
        label: string
    }
}

interface Image {
    label: string
}
