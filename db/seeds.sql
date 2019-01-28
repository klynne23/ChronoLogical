USE chronological_db;

INSERT INTO Users
    (email, password, username, createdAt, updatedAt)
VALUES
    ("rafael.trevino@me.com", "12345", "test1", "2019-01-28 12:00:00", "2019-01-28 12:00:00"),
    ("rafael.trevino@you.com", "12345", "test2", "2019-01-28 12:00:00", "2019-01-28 12:00:00"),
    ("rafael.trevino@them.com", "12345", "test3", "2019-01-28 12:00:00", "2019-01-28 12:00:00");

INSERT INTO Categories
    (cat_name, createdAt, updatedAt)
VALUES
    ("History", "2019-01-28 12:00:00", "2019-01-28 12:00:00");

INSERT INTO Timelines
    (title, public, CategoryId, UserId, createdAt, updatedAt)
VALUES
    ("U.S. States Admission", true, 1, 1, "2019-01-28 12:00:00", "2019-01-28 12:00:00");

INSERT INTO Occurrences
    (event_name, event_description, start_date, end_date, TimelineId, createdAt, updatedAt)
VALUES
    (' Delaware', 'Formed from Colony of Delaware[b] (ratified)', '1787-12-07 00:00:00', '1787-12-07 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Pennsylvania', 'Formed from Proprietary Province of Pennsylvania (ratified)', '1787-12-12 00:00:00', '1787-12-12 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' New Jersey', 'Formed from Crown Colony of New Jersey (ratified)', '1787-12-18 00:00:00', '1787-12-18 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Georgia', 'Formed from Crown Colony of Georgia (ratified)', '1788-01-02 00:00:00', '1788-01-02 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Connecticut', 'Formed from Crown Colony of Connecticut (ratified)', '1788-01-09 00:00:00', '1788-01-09 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Massachusetts', 'Formed from Crown Colony of Massachusetts Bay (ratified)', '1788-02-06 00:00:00', '1788-02-06 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Maryland', 'Formed from Proprietary Province of Maryland (ratified)', '1788-04-28 00:00:00', '1788-04-28 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' South Carolina', 'Formed from Crown Colony of South Carolina (ratified)', '1788-05-23 00:00:00', '1788-05-23 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' New Hampshire', 'Formed from Crown Colony of New Hampshire (ratified)', '1788-06-21 00:00:00', '1788-06-21 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Virginia', 'Formed from Crown Colony and Dominion of Virginia (ratified)', '1788-06-25 00:00:00', '1788-06-25 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' New York', 'Formed from Crown Colony of New York (ratified)', '1788-07-26 00:00:00', '1788-07-26 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' North Carolina', 'Formed from Crown Colony of North Carolina (ratified)', '1789-11-21 00:00:00', '1789-11-21 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Rhode Island', 'Formed from Crown Colony of Rhode Island and Providence Plantations (ratified)', '1790-05-29 00:00:00', '1790-05-29 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Vermont', 'Formed from Vermont Republic[c] (admitted)', '1791-03-04 00:00:00', '1791-03-04 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Kentucky', 'Formed from Virginia (nine counties in its District of Kentucky[d]) (admitted)', '1792-06-01 00:00:00', '1792-06-01 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Tennessee', 'Formed from Southwest Territory (admitted)', '1796-06-01 00:00:00', '1796-06-01 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Ohio', 'Formed from Northwest Territory (part) (admitted)', '1803-03-01 00:00:00', '1803-03-01 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Louisiana', 'Formed from Territory of Orleans (admitted)', '1812-04-30 00:00:00', '1812-04-30 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Indiana', 'Formed from Indiana Territory (admitted)', '1816-12-11 00:00:00', '1816-12-11 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Mississippi', 'Formed from Mississippi Territory (admitted)', '1817-12-10 00:00:00', '1817-12-10 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Illinois', 'Formed from Illinois Territory (part) (admitted)', '1818-12-03 00:00:00', '1818-12-03 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Alabama', 'Formed from Alabama Territory (admitted)', '1819-12-14 00:00:00', '1819-12-14 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Maine', 'Formed from Massachusetts (District of Maine[f]) (admitted)', '1820-03-15 00:00:00', '1820-03-15 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Missouri', 'Formed from Missouri Territory (part) (admitted)', '1821-08-10 00:00:00', '1821-08-10 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Arkansas', 'Formed from Arkansas Territory (admitted)', '1836-06-15 00:00:00', '1836-06-15 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Michigan', 'Formed from Michigan Territory (admitted)', '1837-01-26 00:00:00', '1837-01-26 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Florida', 'Formed from Florida Territory (admitted)', '1845-03-03 00:00:00', '1845-03-03 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Texas', 'Formed from Republic of Texas (admitted)', '1845-12-29 00:00:00', '1845-12-29 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Iowa', 'Formed from Iowa Territory (part) (admitted)', '1846-12-28 00:00:00', '1846-12-28 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Wisconsin', 'Formed from Wisconsin Territory (part) (admitted)', '1848-05-29 00:00:00', '1848-05-29 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' California', 'Formed from unorganized territory (part) (admitted)', '1850-09-09 00:00:00', '1850-09-09 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Minnesota', 'Formed from Minnesota Territory (part) (admitted)', '1858-05-11 00:00:00', '1858-05-11 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Oregon', 'Formed from Oregon Territory (part) (admitted)', '1859-02-14 00:00:00', '1859-02-14 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Kansas', 'Formed from Kansas Territory (part) (admitted)', '1861-01-29 00:00:00', '1861-01-29 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' West Virginia', 'Formed from Virginia (50 Trans-Allegheny region counties[g]) (admitted)', '1863-06-20 00:00:00', '1863-06-20 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Nevada', 'Formed from Nevada Territory (admitted)', '1864-10-31 00:00:00', '1864-10-31 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Nebraska', 'Formed from Nebraska Territory (admitted)', '1867-03-01 00:00:00', '1867-03-01 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Colorado', 'Formed from Colorado Territory (admitted)', '1876-08-01 00:00:00', '1876-08-01 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    ('  North Dakota', 'Formed from Dakota Territory (part) (admitted)', '1889-11-02 00:00:00', '1889-11-02 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' South Dakota', 'Formed from Dakota Territory (part) (admitted)', '1889-11-02 00:00:00', '1889-11-02 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Montana', 'Formed from Montana Territory (admitted)', '1889-11-08 00:00:00', '1889-11-08 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Washington', 'Formed from Washington Territory (admitted)', '1889-11-11 00:00:00', '1889-11-11 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Idaho', 'Formed from Idaho Territory (admitted)', '1890-07-03 00:00:00', '1890-07-03 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Wyoming', 'Formed from Wyoming Territory (admitted)', '1890-07-10 00:00:00', '1890-07-10 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Utah', 'Formed from Utah Territory (admitted)', '1896-01-04 00:00:00', '1896-01-04 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Oklahoma', 'Formed from Oklahoma Territory and Indian Territory (admitted)', '1907-11-16 00:00:00', '1907-11-16 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' New Mexico', 'Formed from New Mexico Territory (admitted)', '1912-01-06 00:00:00', '1912-01-06 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Arizona', 'Formed from Arizona Territory (admitted)', '1912-02-14 00:00:00', '1912-02-14 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Alaska', 'Formed from Territory of Alaska (admitted)', '1959-01-03 00:00:00', '1959-01-03 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    (' Hawaii', 'Formed from Territory of Hawaii (admitted)', '1959-08-21 00:00:00', '1959-08-21 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    ('Virginia', '(ratified)', '1777-12-16 00:00:00', '1777-12-16 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    ('South Carolina', '(ratified)', '1778-02-05 00:00:00', '1778-02-05 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    ('New York', '(ratified)', '1778-02-06 00:00:00', '1778-02-06 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    ('Rhode Island', '(ratified)', '1778-02-09 00:00:00', '1778-02-09 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    ('Connecticut', '(ratified)', '1778-02-12 00:00:00', '1778-02-12 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    ('Georgia', '(ratified)', '1778-02-26 00:00:00', '1778-02-26 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    ('New Hampshire', '(ratified)', '1778-03-04 00:00:00', '1778-03-04 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    ('Pennsylvania', '(ratified)', '1778-03-05 00:00:00', '1778-03-05 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    ('Massachusetts', '(ratified)', '1778-03-10 00:00:00', '1778-03-10 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    ('North Carolina', '(ratified)', '1778-04-05 00:00:00', '1778-04-05 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    ('New Jersey', '(ratified)', '1778-11-19 00:00:00', '1778-11-19 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00'),
    ('Delaware', '(ratified)', '1779-02-01 00:00:00', '1779-02-01 00:00:00', 1, '2019-01-28 12:00:00', '2019-01-28 12:00:00');