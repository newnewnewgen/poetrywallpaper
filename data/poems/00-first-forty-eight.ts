/**
 * The poems the daily page draws from: carpe diem, in the broad sense. Poems
 * about making the most of the time there is, from Horace to the 1920s.
 *
 * Every one was published before 1930, which puts it in the public domain in
 * the United States, so the page can print the full text. The year of first
 * publication is kept on each entry so that claim can be checked poem by
 * poem. (The well-known modern carpe diem poems, Frost's "Carpe Diem", Mary
 * Oliver's "The Summer Day", Li-Young Lee's and Jane Hirshfield's, are still
 * in copyright and are not here.)
 *
 * Typesetting: the text is kept exactly as it should print. Leading spaces
 * are indentation and are preserved, a blank line is a stanza break, and a
 * line longer than the screen wraps with a hanging indent. The font is a
 * typewriter face, so one space is one column.
 *
 * Adding a poem changes the shuffle for every day of the year (the order is
 * seeded by the year and the length of this list), so add in batches rather
 * than one at a time if you want past days to stay put.
 */
import type { Poem } from "@/data/poem-type";

export const batch: Poem[] = [
  {
    title: "Ode I.11 (Carpe Diem)",
    author: "Horace, translated by John Conington",
    year: 1863,
    text: `
Ask not ('tis forbidden knowledge), what our destined term of years,
Mine and yours; nor scan the tables of your Babylonish seers.
Better far to bear the future, my Leuconoe, like the past,
Whether Jove has many winters yet to give, or this our last;
This, that makes the Tyrrhene billows spend their strength against the shore.
Strain your wine and prove your wisdom; life is short; should hope be more?
In the moment of our talking, envious time has ebb'd away.
Seize the present; trust to-morrow e'en as little as you may.
`,
  },
  {
    title: "To the Virgins, to Make Much of Time",
    author: "Robert Herrick",
    year: 1648,
    text: `
Gather ye rosebuds while ye may,
    Old Time is still a-flying;
And this same flower that smiles today
    Tomorrow will be dying.

The glorious lamp of heaven, the sun,
    The higher he's a-getting,
The sooner will his race be run,
    And nearer he's to setting.

That age is best which is the first,
    When youth and blood are warmer;
But being spent, the worse, and worst
    Times still succeed the former.

Then be not coy, but use your time,
    And while ye may, go marry;
For having lost but once your prime,
    You may forever tarry.
`,
  },
  {
    title: "To Daffodils",
    author: "Robert Herrick",
    year: 1648,
    text: `
Fair Daffodils, we weep to see
    You haste away so soon;
As yet the early-rising sun
    Has not attain'd his noon.
        Stay, stay,
    Until the hasting day
        Has run
    But to the even-song;
And, having pray'd together, we
    Will go with you along.

We have short time to stay, as you,
    We have as short a spring;
As quick a growth to meet decay,
    As you, or anything.
        We die
    As your hours do, and dry
        Away,
    Like to the summer's rain;
Or as the pearls of morning's dew,
    Ne'er to be found again.
`,
  },
  {
    title: "Corinna's Going a-Maying (the last stanza)",
    author: "Robert Herrick",
    year: 1648,
    text: `
Come, let us go, while we are in our prime;
And take the harmless folly of the time!
    We shall grow old apace, and die
    Before we know our liberty.
    Our life is short, and our days run
    As fast away as does the sun.
And, as a vapour or a drop of rain,
Once lost, can ne'er be found again,
    So when or you or I are made
    A fable, song, or fleeting shade,
    All love, all liking, all delight
    Lies drowned with us in endless night.
Then, while time serves, and we are but decaying,
Come, my Corinna, come, let's go a-Maying.
`,
  },
  {
    title: "To His Coy Mistress",
    author: "Andrew Marvell",
    year: 1681,
    text: `
Had we but world enough and time,
This coyness, lady, were no crime.
We would sit down, and think which way
To walk, and pass our long love's day.
Thou by the Indian Ganges' side
Shouldst rubies find; I by the tide
Of Humber would complain. I would
Love you ten years before the flood,
And you should, if you please, refuse
Till the conversion of the Jews.
My vegetable love should grow
Vaster than empires and more slow;
An hundred years should go to praise
Thine eyes, and on thy forehead gaze;
Two hundred to adore each breast,
But thirty thousand to the rest;
An age at least to every part,
And the last age should show your heart.
For, lady, you deserve this state,
Nor would I love at lower rate.

But at my back I always hear
Time's wingèd chariot hurrying near;
And yonder all before us lie
Deserts of vast eternity.
Thy beauty shall no more be found;
Nor, in thy marble vault, shall sound
My echoing song; then worms shall try
That long-preserved virginity,
And your quaint honour turn to dust,
And into ashes all my lust;
The grave's a fine and private place,
But none, I think, do there embrace.

Now therefore, while the youthful hue
Sits on thy skin like morning dew,
And while thy willing soul transpires
At every pore with instant fires,
Now let us sport us while we may,
And now, like amorous birds of prey,
Rather at once our time devour
Than languish in his slow-chapped power.
Let us roll all our strength and all
Our sweetness up into one ball,
And tear our pleasures with rough strife
Through the iron gates of life:
Thus, though we cannot make our sun
Stand still, yet we will make him run.
`,
  },
  {
    title: "Come, my Celia",
    author: "Ben Jonson, after Catullus",
    year: 1606,
    text: `
Come, my Celia, let us prove,
While we can, the sports of love;
Time will not be ours for ever;
He at length our good will sever.
Spend not then his gifts in vain.
Suns that set may rise again;
But if once we lose this light,
'Tis with us perpetual night.
Why should we defer our joys?
Fame and rumour are but toys.
Cannot we delude the eyes
Of a few poor household spies,
Or his easier ears beguile,
So removed by our wile?
'Tis no sin love's fruit to steal;
But the sweet thefts to reveal,
To be taken, to be seen,
These have crimes accounted been.
`,
  },
  {
    title: "My Sweetest Lesbia",
    author: "Thomas Campion, after Catullus",
    year: 1601,
    text: `
My sweetest Lesbia, let us live and love,
And though the sager sort our deeds reprove,
Let us not weigh them. Heaven's great lamps do dive
Into their west, and straight again revive,
But soon as once set is our little light,
Then must we sleep one ever-during night.

If all would lead their lives in love like me,
Then bloody swords and armour should not be;
No drum nor trumpet peaceful sleeps should move,
Unless alarm came from the camp of love.
But fools do live, and waste their little light,
And seek with pain their ever-during night.

When timely death my life and fortune ends,
Let not my hearse be vexed with mourning friends,
But let all lovers, rich in triumph, come
And with sweet pastimes grace my happy tomb;
And Lesbia, close up thou my little light,
And crown with love my ever-during night.
`,
  },
  {
    title: "Go, Lovely Rose",
    author: "Edmund Waller",
    year: 1645,
    text: `
Go, lovely Rose—
Tell her that wastes her time and me,
    That now she knows,
When I resemble her to thee,
How sweet and fair she seems to be.

    Tell her that's young,
And shuns to have her graces spied,
    That hadst thou sprung
In deserts where no men abide,
Thou must have uncommended died.

    Small is the worth
Of beauty from the light retired:
    Bid her come forth,
Suffer herself to be desired,
And not blush so to be admired.

    Then die—that she
The common fate of all things rare
    May read in thee;
How small a part of time they share
That are so wondrous sweet and fair!
`,
  },
  {
    title: "Song: Persuasions to Enjoy",
    author: "Thomas Carew",
    year: 1640,
    text: `
If the quick spirits in your eye
Now languish and anon must die;
If every sweet and every grace
Must fly from that forsaken face;
Then, Celia, let us reap our joys
Ere time such goodly fruit destroys.

Or if that golden fleece must grow
For ever free from aged snow;
If those bright suns must know no shade,
Nor your fresh beauties ever fade;
Then fear not, Celia, to bestow
What, still being gather'd, still must grow.
Thus either Time his sickle brings
In vain, or else in vain his wings.
`,
  },
  {
    title: "The Noble Nature",
    author: "Ben Jonson",
    year: 1640,
    text: `
It is not growing like a tree
In bulk, doth make Man better be;
Or standing long an oak, three hundred year,
To fall a log at last, dry, bald, and sere:
    A lily of a day
    Is fairer far in May,
Although it fall and die that night—
It was the plant and flower of Light.
In small proportions we just beauties see;
And in short measures life may perfect be.
`,
  },
  {
    title: "O Mistress Mine",
    author: "William Shakespeare",
    year: 1623,
    text: `
O mistress mine, where are you roaming?
O, stay and hear; your true love's coming,
    That can sing both high and low:
Trip no further, pretty sweeting;
Journeys end in lovers meeting,
    Every wise man's son doth know.

What is love? 'tis not hereafter;
Present mirth hath present laughter;
    What's to come is still unsure:
In delay there lies no plenty;
Then come kiss me, sweet and twenty,
    Youth's a stuff will not endure.
`,
  },
  {
    title: "Sonnet 12: When I do count the clock that tells the time",
    author: "William Shakespeare",
    year: 1609,
    text: `
When I do count the clock that tells the time,
And see the brave day sunk in hideous night;
When I behold the violet past prime,
And sable curls all silver'd o'er with white;
When lofty trees I see barren of leaves
Which erst from heat did canopy the herd,
And summer's green all girded up in sheaves
Borne on the bier with white and bristly beard,
Then of thy beauty do I question make,
That thou among the wastes of time must go,
Since sweets and beauties do themselves forsake
And die as fast as they see others grow;
    And nothing 'gainst Time's scythe can make defence
    Save breed, to brave him when he takes thee hence.
`,
  },
  {
    title: "Sonnet 18: Shall I compare thee to a summer's day?",
    author: "William Shakespeare",
    year: 1609,
    text: `
Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date;
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance or nature's changing course untrimm'd;
But thy eternal summer shall not fade,
Nor lose possession of that fair thou ow'st;
Nor shall Death brag thou wander'st in his shade,
When in eternal lines to time thou grow'st:
    So long as men can breathe or eyes can see,
    So long lives this, and this gives life to thee.
`,
  },
  {
    title: "Sonnet 60: Like as the waves make towards the pebbled shore",
    author: "William Shakespeare",
    year: 1609,
    text: `
Like as the waves make towards the pebbled shore,
So do our minutes hasten to their end;
Each changing place with that which goes before,
In sequent toil all forwards do contend.
Nativity, once in the main of light,
Crawls to maturity, wherewith being crown'd,
Crooked eclipses 'gainst his glory fight,
And Time that gave doth now his gift confound.
Time doth transfix the flourish set on youth
And delves the parallels in beauty's brow,
Feeds on the rarities of nature's truth,
And nothing stands but for his scythe to mow:
    And yet to times in hope my verse shall stand,
    Praising thy worth, despite his cruel hand.
`,
  },
  {
    title: "Sonnet 73: That time of year thou mayst in me behold",
    author: "William Shakespeare",
    year: 1609,
    text: `
That time of year thou mayst in me behold
When yellow leaves, or none, or few, do hang
Upon those boughs which shake against the cold,
Bare ruin'd choirs, where late the sweet birds sang.
In me thou see'st the twilight of such day
As after sunset fadeth in the west,
Which by and by black night doth take away,
Death's second self, that seals up all in rest.
In me thou see'st the glowing of such fire
That on the ashes of his youth doth lie,
As the death-bed whereon it must expire,
Consum'd with that which it was nourish'd by.
    This thou perceiv'st, which makes thy love more strong,
    To love that well which thou must leave ere long.
`,
  },
  {
    title: "The Passionate Shepherd to His Love",
    author: "Christopher Marlowe",
    year: 1599,
    text: `
Come live with me and be my love,
And we will all the pleasures prove,
That Valleys, groves, hills, and fields,
Woods, or steepy mountain yields.

And we will sit upon the Rocks,
Seeing the Shepherds feed their flocks,
By shallow Rivers to whose falls
Melodious birds sing Madrigals.

And I will make thee beds of Roses
And a thousand fragrant posies,
A cap of flowers, and a kirtle
Embroidered all with leaves of Myrtle;

A gown made of the finest wool
Which from our pretty Lambs we pull;
Fair lined slippers for the cold,
With buckles of the purest gold;

A belt of straw and Ivy buds,
With Coral clasps and Amber studs:
And if these pleasures may thee move,
Come live with me, and be my love.

The Shepherds' Swains shall dance and sing
For thy delight each May-morning:
If these delights thy mind may move,
Then live with me, and be my love.
`,
  },
  {
    title: "The Nymph's Reply to the Shepherd",
    author: "Sir Walter Raleigh",
    year: 1600,
    text: `
If all the world and love were young,
And truth in every shepherd's tongue,
These pretty pleasures might me move
To live with thee and be thy love.

Time drives the flocks from field to fold,
When rivers rage and rocks grow cold,
And Philomel becometh dumb;
The rest complains of cares to come.

The flowers do fade, and wanton fields
To wayward winter reckoning yields;
A honey tongue, a heart of gall,
Is fancy's spring, but sorrow's fall.

Thy gowns, thy shoes, thy beds of roses,
Thy cap, thy kirtle, and thy posies
Soon break, soon wither, soon forgotten,—
In folly ripe, in reason rotten.

Thy belt of straw and ivy buds,
Thy coral clasps and amber studs,
All these in me no means can move
To come to thee and be thy love.

But could youth last and love still breed,
Had joys no date nor age no need,
Then these delights my mind might move
To live with thee and be thy love.
`,
  },
  {
    title: "A Litany in Time of Plague",
    author: "Thomas Nashe",
    year: 1600,
    text: `
Adieu, farewell, earth's bliss;
This world uncertain is;
Fond are life's lustful joys;
Death proves them all but toys;
None from his darts can fly;
I am sick, I must die.
    Lord, have mercy on us!

Rich men, trust not in wealth,
Gold cannot buy you health;
Physic himself must fade.
All things to end are made,
The plague full swift goes by;
I am sick, I must die.
    Lord, have mercy on us!

Beauty is but a flower
Which wrinkles will devour;
Brightness falls from the air;
Queens have died young and fair;
Dust hath closed Helen's eye.
I am sick, I must die.
    Lord, have mercy on us!

Strength stoops unto the grave,
Worms feed on Hector brave;
Swords may not fight with fate,
Earth still holds open her gate.
"Come, come!" the bells do cry.
I am sick, I must die.
    Lord, have mercy on us!

Wit with his wantonness
Tasteth death's bitterness;
Hell's executioner
Hath no ears for to hear
What vain art can reply.
I am sick, I must die.
    Lord, have mercy on us!

Haste, therefore, each degree,
To welcome destiny;
Heaven is our heritage,
Earth but a player's stage;
Mount we unto the sky.
I am sick, I must die.
    Lord, have mercy on us!
`,
  },
  {
    title: "Eternity",
    author: "William Blake",
    year: 1863,
    text: `
He who binds to himself a joy
Does the winged life destroy;
But he who kisses the joy as it flies
Lives in eternity's sun rise.
`,
  },
  {
    title: "My Heart Leaps Up",
    author: "William Wordsworth",
    year: 1807,
    text: `
My heart leaps up when I behold
    A rainbow in the sky:
So was it when my life began;
So is it now I am a man;
So be it when I shall grow old,
    Or let me die!
The Child is father of the Man;
And I could wish my days to be
Bound each to each by natural piety.
`,
  },
  {
    title: "Mutability",
    author: "Percy Bysshe Shelley",
    year: 1824,
    text: `
The flower that smiles to-day
    To-morrow dies;
All that we wish to stay
    Tempts and then flies.
What is this world's delight?
Lightning that mocks the night,
    Brief even as bright.

Virtue, how frail it is!
    Friendship how rare!
Love, how it sells poor bliss
    For proud despair!
But we, though soon they fall,
Survive their joy, and all
    Which ours we call.

Whilst skies are blue and bright,
    Whilst flowers are gay,
Whilst eyes that change ere night
    Make glad the day;
Whilst yet the calm hours creep,
Dream thou—and from thy sleep
    Then wake to weep.
`,
  },
  {
    title: "Ozymandias",
    author: "Percy Bysshe Shelley",
    year: 1818,
    text: `
I met a traveller from an antique land,
Who said—"Two vast and trunkless legs of stone
Stand in the desert. . . . Near them, on the sand,
Half sunk a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read
Which yet survive, stamped on these lifeless things,
The hand that mocked them, and the heart that fed;
And on the pedestal, these words appear:
My name is Ozymandias, King of Kings;
Look on my Works, ye Mighty, and despair!
Nothing beside remains. Round the decay
Of that colossal Wreck, boundless and bare
The lone and level sands stretch far away."
`,
  },
  {
    title: "When I Have Fears That I May Cease to Be",
    author: "John Keats",
    year: 1848,
    text: `
When I have fears that I may cease to be
    Before my pen has gleaned my teeming brain,
Before high-pilèd books, in charactery,
    Hold like rich garners the full ripened grain;
When I behold, upon the night's starred face,
    Huge cloudy symbols of a high romance,
And think that I may never live to trace
    Their shadows with the magic hand of chance;
And when I feel, fair creature of an hour,
    That I shall never look upon thee more,
Never have relish in the faery power
    Of unreflecting love—then on the shore
Of the wide world I stand alone, and think
Till love and fame to nothingness do sink.
`,
  },
  {
    title: "Dying Speech of an Old Philosopher",
    author: "Walter Savage Landor",
    year: 1853,
    text: `
I strove with none, for none was worth my strife:
Nature I loved, and, next to Nature, Art:
I warm'd both hands before the fire of Life;
It sinks; and I am ready to depart.
`,
  },
  {
    title: "A Psalm of Life",
    author: "Henry Wadsworth Longfellow",
    year: 1838,
    text: `
Tell me not, in mournful numbers,
    Life is but an empty dream!
For the soul is dead that slumbers,
    And things are not what they seem.

Life is real! Life is earnest!
    And the grave is not its goal;
Dust thou art, to dust returnest,
    Was not spoken of the soul.

Not enjoyment, and not sorrow,
    Is our destined end or way;
But to act, that each to-morrow
    Find us farther than to-day.

Art is long, and Time is fleeting,
    And our hearts, though stout and brave,
Still, like muffled drums, are beating
    Funeral marches to the grave.

In the world's broad field of battle,
    In the bivouac of Life,
Be not like dumb, driven cattle!
    Be a hero in the strife!

Trust no Future, howe'er pleasant!
    Let the dead Past bury its dead!
Act,—act in the living Present!
    Heart within, and God o'erhead!

Lives of great men all remind us
    We can make our lives sublime,
And, departing, leave behind us
    Footprints on the sands of time;

Footprints, that perhaps another,
    Sailing o'er life's solemn main,
A forlorn and shipwrecked brother,
    Seeing, shall take heart again.

Let us, then, be up and doing,
    With a heart for any fate;
Still achieving, still pursuing,
    Learn to labor and to wait.
`,
  },
  {
    title: "Ulysses",
    author: "Alfred, Lord Tennyson",
    year: 1842,
    text: `
It little profits that an idle king,
By this still hearth, among these barren crags,
Match'd with an aged wife, I mete and dole
Unequal laws unto a savage race,
That hoard, and sleep, and feed, and know not me.
I cannot rest from travel: I will drink
Life to the lees: All times I have enjoy'd
Greatly, have suffer'd greatly, both with those
That loved me, and alone, on shore, and when
Thro' scudding drifts the rainy Hyades
Vext the dim sea: I am become a name;
For always roaming with a hungry heart
Much have I seen and known; cities of men
And manners, climates, councils, governments,
Myself not least, but honour'd of them all;
And drunk delight of battle with my peers,
Far on the ringing plains of windy Troy.
I am a part of all that I have met;
Yet all experience is an arch wherethro'
Gleams that untravell'd world whose margin fades
For ever and forever when I move.
How dull it is to pause, to make an end,
To rust unburnish'd, not to shine in use!
As tho' to breathe were life! Life piled on life
Were all too little, and of one to me
Little remains: but every hour is saved
From that eternal silence, something more,
A bringer of new things; and vile it were
For some three suns to store and hoard myself,
And this gray spirit yearning in desire
To follow knowledge like a sinking star,
Beyond the utmost bound of human thought.

This is my son, mine own Telemachus,
To whom I leave the sceptre and the isle,—
Well-loved of me, discerning to fulfil
This labour, by slow prudence to make mild
A rugged people, and thro' soft degrees
Subdue them to the useful and the good.
Most blameless is he, centred in the sphere
Of common duties, decent not to fail
In offices of tenderness, and pay
Meet adoration to my household gods,
When I am gone. He works his work, I mine.

There lies the port; the vessel puffs her sail:
There gloom the dark, broad seas. My mariners,
Souls that have toil'd, and wrought, and thought with me—
That ever with a frolic welcome took
The thunder and the sunshine, and opposed
Free hearts, free foreheads—you and I are old;
Old age hath yet his honour and his toil;
Death closes all: but something ere the end,
Some work of noble note, may yet be done,
Not unbecoming men that strove with Gods.
The lights begin to twinkle from the rocks:
The long day wanes: the slow moon climbs: the deep
Moans round with many voices. Come, my friends,
'T is not too late to seek a newer world.
Push off, and sitting well in order smite
The sounding furrows; for my purpose holds
To sail beyond the sunset, and the baths
Of all the western stars, until I die.
It may be that the gulfs will wash us down:
It may be we shall touch the Happy Isles,
And see the great Achilles, whom we knew.
Tho' much is taken, much abides; and tho'
We are not now that strength which in old days
Moved earth and heaven, that which we are, we are;
One equal temper of heroic hearts,
Made weak by time and fate, but strong in will
To strive, to seek, to find, and not to yield.
`,
  },
  {
    title: "O Me! O Life!",
    author: "Walt Whitman",
    year: 1865,
    text: `
Oh me! Oh life! of the questions of these recurring,
Of the endless trains of the faithless, of cities fill'd with the foolish,
Of myself forever reproaching myself, (for who more foolish than I, and who more faithless?)
Of eyes that vainly crave the light, of the objects mean, of the struggle ever renew'd,
Of the poor results of all, of the plodding and sordid crowds I see around me,
Of the empty and useless years of the rest, with the rest me intertwined,
The question, O me! so sad, recurring—What good amid these, O me, O life?

                                  Answer.
That you are here—that life exists and identity,
That the powerful play goes on, and you may contribute a verse.
`,
  },
  {
    title: "Song of the Open Road (part 1)",
    author: "Walt Whitman",
    year: 1856,
    text: `
Afoot and light-hearted I take to the open road,
Healthy, free, the world before me,
The long brown path before me leading wherever I choose.

Henceforth I ask not good-fortune, I myself am good-fortune,
Henceforth I whimper no more, postpone no more, need nothing,
Done with indoor complaints, libraries, querulous criticisms,
Strong and content I travel the open road.

The earth, that is sufficient,
I do not want the constellations any nearer,
I know they are very well where they are,
I know they suffice for those who belong to them.

(Still here I carry my old delicious burdens,
I carry them, men and women, I carry them with me wherever I go,
I swear it is impossible for me to get rid of them,
I am fill'd with them, and I will fill them in return.)
`,
  },
  {
    title: "Forever – is composed of Nows",
    author: "Emily Dickinson",
    year: 1929,
    text: `
Forever – is composed of Nows –
'Tis not a different time –
Except for Infiniteness –
And Latitude of Home –

From this – experienced Here –
Remove the Dates – to These –
Let Months dissolve in further Months –
And Years – exhale in Years –

Without Debate – or Pause –
Or Celebrated Days –
No different Our Years would be
From Anno Dominies –
`,
  },
  {
    title: "I had no time to Hate",
    author: "Emily Dickinson",
    year: 1890,
    text: `
I had no time to Hate –
Because
The Grave would hinder Me –
And Life was not so
Ample I
Could finish – Enmity –

Nor had I time to Love –
But since
Some Industry must be –
The little Toil of Love –
I thought
Be large enough for Me –
`,
  },
  {
    title: "Look back on Time, with kindly eyes",
    author: "Emily Dickinson",
    year: 1896,
    text: `
Look back on time with kindly eyes,
He doubtless did his best;
How softly sinks his trembling sun
In human nature's west!
`,
  },
  {
    title: "Because I could not stop for Death",
    author: "Emily Dickinson",
    year: 1890,
    text: `
Because I could not stop for Death,
He kindly stopped for me;
The carriage held but just ourselves
And Immortality.

We slowly drove, he knew no haste,
And I had put away
My labor, and my leisure too,
For his civility.

We passed the school where children played,
Their lessons scarcely done;
We passed the fields of gazing grain,
We passed the setting sun.

We paused before a house that seemed
A swelling of the ground;
The roof was scarcely visible,
The cornice but a mound.

Since then 't is centuries; but each
Feels shorter than the day
I first surmised the horses' heads
Were toward eternity.
`,
  },
  {
    title: "from the Rubáiyát of Omar Khayyám",
    author: "Edward FitzGerald, after Omar Khayyám",
    year: 1859,
    text: `
Come, fill the Cup, and in the Fire of Spring
The Winter Garment of Repentance fling:
    The Bird of Time has but a little way
To fly—and Lo! the Bird is on the Wing.

Here with a Loaf of Bread beneath the Bough,
A Flask of Wine, a Book of Verse—and Thou
    Beside me singing in the Wilderness—
And Wilderness is Paradise enow.

Some for the Glories of This World; and some
Sigh for the Prophet's Paradise to come;
    Ah, take the Cash, and let the Credit go,
Nor heed the rumble of a distant Drum!

Ah, my Belovéd, fill the Cup that clears
To-day of past Regrets and future Fears—
    To-morrow?—Why, To-morrow I may be
Myself with Yesterday's Sev'n Thousand Years.

Ah, make the most of what we yet may spend,
Before we too into the Dust descend;
    Dust into Dust, and under Dust, to lie,
Sans Wine, sans Song, sans Singer, and—sans End!

The Moving Finger writes; and, having writ,
Moves on: nor all your Piety nor Wit
    Shall lure it back to cancel half a Line,
Nor all your Tears wash out a Word of it.
`,
  },
  {
    title: "Happy Thought",
    author: "Robert Louis Stevenson",
    year: 1885,
    text: `
The world is so full of a number of things,
I'm sure we should all be as happy as kings.
`,
  },
  {
    title: "Loveliest of Trees, the Cherry Now",
    author: "A. E. Housman",
    year: 1896,
    text: `
Loveliest of trees, the cherry now
Is hung with bloom along the bough,
And stands about the woodland ride
Wearing white for Eastertide.

Now, of my threescore years and ten,
Twenty will not come again,
And take from seventy springs a score,
It only leaves me fifty more.

And since to look at things in bloom
Fifty springs are little room,
About the woodlands I will go
To see the cherry hung with snow.
`,
  },
  {
    title: "Reveille",
    author: "A. E. Housman",
    year: 1896,
    text: `
Wake: the silver dusk returning
    Up the beach of darkness brims,
And the ship of sunrise burning
    Strands upon the eastern rims.

Wake: the vaulted shadow shatters,
    Trampled to the floor it spanned,
And the tent of night in tatters
    Straws the sky-pavilioned land.

Up, lad, up, 'tis late for lying:
    Hear the drums of morning play;
Hark, the empty highways crying
    'Who'll beyond the hills away?'

Towns and countries woo together,
    Forelands beacon, belfries call;
Never lad that trod on leather
    Lived to feast his heart with all.

Up, lad: thews that lie and cumber
    Sunlit pallets never thrive;
Morns abed and daylight slumber
    Were not meant for man alive.

Clay lies still, but blood's a rover;
    Breath's a ware that will not keep.
Up, lad: when the journey's over
    There'll be time enough to sleep.
`,
  },
  {
    title: "Vitae Summa Brevis",
    author: "Ernest Dowson",
    year: 1896,
    text: `
They are not long, the weeping and the laughter,
    Love and desire and hate:
I think they have no portion in us after
    We pass the gate.

They are not long, the days of wine and roses:
    Out of a misty dream
Our path emerges for a while, then closes
    Within a dream.
`,
  },
  {
    title: "A Drinking Song",
    author: "W. B. Yeats",
    year: 1910,
    text: `
Wine comes in at the mouth
And love comes in at the eye;
That's all we shall know for truth
Before we grow old and die.
I lift the glass to my mouth,
I look at you, and I sigh.
`,
  },
  {
    title: "Nothing Gold Can Stay",
    author: "Robert Frost",
    year: 1923,
    text: `
Nature's first green is gold,
Her hardest hue to hold.
Her early leaf's a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.
`,
  },
  {
    title: "A Time to Talk",
    author: "Robert Frost",
    year: 1916,
    text: `
When a friend calls to me from the road
And slows his horse to a meaning walk,
I don't stand still and look around
On all the hills I haven't hoed,
And shout from where I am, What is it?
No, not as there is a time to talk.
I thrust my hoe in the mellow ground,
Blade-end up and five feet tall,
And plod: I go up to the stone wall
For a friendly visit.
`,
  },
  {
    title: "The Road Not Taken",
    author: "Robert Frost",
    year: 1916,
    text: `
Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.
`,
  },
  {
    title: "Barter",
    author: "Sara Teasdale",
    year: 1917,
    text: `
Life has loveliness to sell,
    All beautiful and splendid things,
Blue waves whitened on a cliff,
    Soaring fire that sways and sings,
And children's faces looking up
Holding wonder like a cup.

Life has loveliness to sell,
    Music like a curve of gold,
Scent of pine trees in the rain,
    Eyes that love you, arms that hold,
And for your spirit's still delight,
Holy thoughts that star the night.

Spend all you have for loveliness,
    Buy it and never count the cost;
For one white singing hour of peace
    Count many a year of strife well lost,
And for a breath of ecstasy
Give all you have been, or could be.
`,
  },
  {
    title: "The Coin",
    author: "Sara Teasdale",
    year: 1920,
    text: `
Into my heart's treasury
    I slipped a coin
That time cannot take
    Nor a thief purloin,—
Oh better than the minting
    Of a gold-crowned king
Is the safe-kept memory
    Of a lovely thing.
`,
  },
  {
    title: "First Fig",
    author: "Edna St. Vincent Millay",
    year: 1920,
    text: `
My candle burns at both ends;
    It will not last the night;
But ah, my foes, and oh, my friends—
    It gives a lovely light!
`,
  },
  {
    title: "Second Fig",
    author: "Edna St. Vincent Millay",
    year: 1920,
    text: `
Safe upon the solid rock the ugly houses stand:
Come and see my shining palace built upon the sand!
`,
  },
  {
    title: "Afternoon on a Hill",
    author: "Edna St. Vincent Millay",
    year: 1917,
    text: `
I will be the gladdest thing
    Under the sun!
I will touch a hundred flowers
    And not pick one.

I will look at cliffs and clouds
    With quiet eyes,
Watch the wind bow down the grass,
    And the grass rise.

And when lights begin to show
    Up from the town,
I will mark which must be mine,
    And then start down!
`,
  },
  {
    title: "Dreams",
    author: "Langston Hughes",
    year: 1922,
    text: `
Hold fast to dreams
For if dreams die
Life is a broken-winged bird
That cannot fly.

Hold fast to dreams
For when dreams go
Life is a barren field
Frozen with snow.
`,
  },
  {
    title: "Ode on Solitude",
    author: "Alexander Pope",
    year: 1717,
    text: `
Happy the man, whose wish and care
    A few paternal acres bound,
Content to breathe his native air,
        In his own ground.

Whose herds with milk, whose fields with bread,
    Whose flocks supply him with attire,
Whose trees in summer yield him shade,
        In winter fire.

Blest, who can unconcern'dly find
    Hours, days, and years slide soft away,
In health of body, peace of mind,
        Quiet by day,

Sound sleep by night; study and ease,
    Together mixt; sweet recreation;
And innocence, which most does please,
        With meditation.

Thus let me live, unseen, unknown;
    Thus unlamented let me die;
Steal from the world, and not a stone
        Tell where I lie.
`,
  },
];
