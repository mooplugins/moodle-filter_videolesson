import {initializePlayer} from 'mod_videolesson/script';

export const init = () => {
    // Support both old and new class names for backward compatibility
    const placeholders = document.querySelectorAll('.videolesson-placeholder, .videoaws-placeholder');
    placeholders.forEach(placeholder => {
        const videos = placeholder.querySelectorAll('video');
        videos.forEach(video => {
            if (video.dataset.initialized) {
                return;
            }

            const hash = video.dataset.hash;
            const player_container = placeholder.querySelector(`#player-container-div-${hash}`);
            const player_placeholder = placeholder.querySelector(`#player-placeholder-${hash}`);

            if (!player_container || !player_placeholder) {
                return;
            }

            const params = {
                ishls: true,
                video: video,
            };

            initializePlayer(params)
                .then(() => {
                    video.dataset.initialized = true;
                    player_container.classList.remove('d-none');
                    player_placeholder.classList.add('d-none');
                    return {initialized: true};
                })
                .catch(() => {
                    player_container.classList.add('d-none');
                    player_placeholder.classList.remove('d-none');
                });
        });
    });
};
