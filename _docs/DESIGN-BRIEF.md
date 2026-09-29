# AMARI Tulum — worldflight brief

Interviewed 18 Sep 2026 (four questions, answered by Joseph). Not self-authored.

## The eight answers

1. **Vibe / references.** Cinematic maximal. Reference named by the client: magnumestate.com (Bali developer, video hero, scroll-driven). Brand guide: brand.amaritulum.com v1.010.
2. **Journey.** One continuous descent: above the canopy at dawn, down through the trees, up to the villa, inside, out to the pool, the day passing over it, then night and the offer.
3. **Energy curve.** Quiet and wide at the top, building through the approach, loudest at the interior/pool reveal, then the peak is *quiet and slow* (the light), then a resolved close.
4. **Feeling, stage by stage, and the one moment.** Arrival → recognition → desire → scrutiny (the numbers) → *stillness* (the peak) → resolve. **Peak: "the one where you scroll and the sun moves across the villa."**
5. **The thing no other site does.** Let the visitor hold the light: a time rail they can drag, so they choose the hour they would own.
6. **Distance from premium-minimal.** Cinematic maximal.
7. **One world or scenes.** One unbroken world.
8. **Assets.** AMARI's own photography exists and is used for the sales plates; the flight itself is generated footage.

## Feeling curve

| Leg | Feeling | What causes it |
|---|---|---|
| 1 Canopy | Awe, small | Mist over an unbroken canopy at first light, no building in sight |
| 2 Descent | Anticipation | The canopy opens and a roofline appears below |
| 3 Facade | Recognition | The house resolves out of the green, door lit from inside |
| 4 Interior | Desire | Movement through the room, out to water |
| 5 The day (PEAK) | Stillness | Nothing moves but the light. Longest span on the page |
| 6 Night rise | Resolve | Rise to the roof, jungle black, the offer holds |

## The peak

"It's the site where you scroll and the sun crosses the villa, and you can drag it back to dawn." Lives in leg 5, largest weight on the page, preceded by the quietest copy.

## Tell-someone sentence

It's the site where you fly down through the jungle into the villa and then hold the light still.

## Authored silence

Leg 5 carries one line of copy and nothing else. The quiet is the point, not dead scroll.

## Build log (18 Sep 2026)

- Grammar: **worldflight**. Six legs, one fixed stage, nothing in document flow
  but the spacer. Seam 0.16, lerp 0.12 (both the worldflight defaults, not the
  act-mode ones).
- Pace: one rate across the whole flight. 1.09vh per 5.04s leg and 2.16vh for
  the 10.03s day leg = 0.216vh per second of film everywhere. Track 8.61vh.
- Assets: legs 1, 2, 3, 4 and 6 are Kling 3.0 Turbo image-to-video, each
  generated from a frame pulled out of the **encoded** mp4 of the leg before it
  (Architecture A, chain on start images only).
- **Leg 5 was rebuilt.** The 10s clip generated for it came back as a slow
  lateral drift with the light barely changing, which is not the peak the brief
  asked for. Replaced with seven relights of the same terrace frame (07:00,
  09:20, 11:40, 14:30, 16:30, 18:40, 20:10) generated from the leg-4 chain
  frame, cross-dissolved in ffmpeg over 10.03s with a slow push-in. The light
  now genuinely crosses the villa, and the time rail reads the real hours.
- Signature move: **the time rail**. It does not touch the video. Dragging the
  handle scrolls the window inside leg 5's slice of the track, so the light and
  the page move as one thing under the hand. Keyboard-operable as a slider.
