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
    'im:releaseDate': {
        attributes: {
            label: string
        }
    }
    'im:price': {
        label: string
    }
    link: Array<{
        attributes: {
            href: string
        }
    }>
    summary: {
        label: string
    }
    'im:name': {
        label: string
    }
    rating: number
    match: number
}

interface Image {
    label: string
}
