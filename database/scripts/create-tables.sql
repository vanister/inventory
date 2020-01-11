--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3 (Debian 11.3-1.pgdg90+1)
-- Dumped by pg_dump version 11.3

-- Started on 2019-06-17 15:12:51 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 16397)
-- Name: Building; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."building" (
    "id" integer NOT NULL,
    "location_id" integer NOT NULL,
    "building_type_id" smallint NOT NULL,
    "name" character varying(255) NOT NULL,
    "coord" point,
    "address" character varying(500) NOT NULL,
    "description" character varying(500),
    "cost" numeric(9,2),
    "image_url" character varying(2048)
);


ALTER TABLE public."building" OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16474)
-- Name: BuildingType; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."building_type" (
    "id" smallint NOT NULL,
    "name" character varying(255) NOT NULL,
    "description" character varying(500)
);


ALTER TABLE public."building_type" OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16615)
-- Name: BuildingType_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."building_type" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."building_type_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 203 (class 1259 OID 16613)
-- Name: Building_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."building" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."building_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 198 (class 1259 OID 16410)
-- Name: Component; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."component" (
    "id" integer NOT NULL,
    "building_id" integer NOT NULL,
    "component_type_id" smallint NOT NULL,
    "name" character varying(255) NOT NULL,
    "cost" numeric(9,2),
    "location" character varying(255),
    "description" character varying(500),
    "image_url" character varying(2048)
);


ALTER TABLE public."component" OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16491)
-- Name: ComponentType; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."component_type" (
    "id" smallint NOT NULL,
    "name" character varying(255) NOT NULL,
    "description" character varying(500)
);


ALTER TABLE public."component_type" OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16619)
-- Name: ComponentType_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."component_type" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."component_type_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 205 (class 1259 OID 16617)
-- Name: Component_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."component" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."component_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 196 (class 1259 OID 16389)
-- Name: Location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."location" (
    "id" integer NOT NULL,
    "name" character varying(255) NOT NULL,
    "coord" point,
    "description" character varying(500),
    "location_type_id" smallint NOT NULL,
    "image_url" character varying(2048)
);


ALTER TABLE public."location" OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 16466)
-- Name: LocationType; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."location_type" (
    "id" smallint NOT NULL,
    "name" character varying(255) NOT NULL,
    "description" character varying(500)
);


ALTER TABLE public."location_type" OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16623)
-- Name: LocationType_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."location_type" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."location_type_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 207 (class 1259 OID 16621)
-- Name: Location_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."location" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."location_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 202 (class 1259 OID 16499)
-- Name: UserLocation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user_location" (
    "id" integer NOT NULL,
    "location_id" integer NOT NULL,
    "user_id" uuid NOT NULL
);


ALTER TABLE public."user_location" OWNER TO postgres;

--
-- TOC entry 2942 (class 0 OID 0)
-- Dependencies: 202
-- Name: COLUMN "user_location"."user_id"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public."user_location"."user_id" IS 'This is the Id from the user store.';


--
-- TOC entry 209 (class 1259 OID 16625)
-- Name: UserLocation_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."user_location" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."user_location_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2924 (class 0 OID 16397)
-- Dependencies: 197
-- Data for Name: Building; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."building" ("id", "location_id", "building_type_id", "name", "coord", "address", "description", "cost") FROM stdin;
\.


--
-- TOC entry 2927 (class 0 OID 16474)
-- Dependencies: 200
-- Data for Name: BuildingType; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."building_type" ("id", "name", "description") FROM stdin;
\.


--
-- TOC entry 2925 (class 0 OID 16410)
-- Dependencies: 198
-- Data for Name: Component; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."component" ("id", "building_id", "component_type_id", "name", "cost", "location", "description") FROM stdin;
\.


--
-- TOC entry 2928 (class 0 OID 16491)
-- Dependencies: 201
-- Data for Name: ComponentType; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."component_type" ("id", "name", "description") FROM stdin;
\.


--
-- TOC entry 2923 (class 0 OID 16389)
-- Dependencies: 196
-- Data for Name: Location; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."location" ("id", "name", "coord", "description", "location_type_id") FROM stdin;
\.


--
-- TOC entry 2926 (class 0 OID 16466)
-- Dependencies: 199
-- Data for Name: LocationType; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."location_type" ("id", "name", "description") FROM stdin;
\.


--
-- TOC entry 2929 (class 0 OID 16499)
-- Dependencies: 202
-- Data for Name: UserLocation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user_location" ("id", "location_id", "user_id") FROM stdin;
\.


--
-- TOC entry 2943 (class 0 OID 0)
-- Dependencies: 204
-- Name: BuildingType_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."building_type_id_seq"', 1, false);


--
-- TOC entry 2944 (class 0 OID 0)
-- Dependencies: 203
-- Name: Building_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."building_id_seq"', 1, false);


--
-- TOC entry 2945 (class 0 OID 0)
-- Dependencies: 206
-- Name: ComponentType_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."component_type_id_seq"', 1, false);


--
-- TOC entry 2946 (class 0 OID 0)
-- Dependencies: 205
-- Name: Component_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."component_id_seq"', 1, false);


--
-- TOC entry 2947 (class 0 OID 0)
-- Dependencies: 208
-- Name: LocationType_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."location_type_id_seq"', 1, false);


--
-- TOC entry 2948 (class 0 OID 0)
-- Dependencies: 207
-- Name: Location_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."location_id_seq"', 1, false);


--
-- TOC entry 2949 (class 0 OID 0)
-- Dependencies: 209
-- Name: UserLocation_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."user_location_id_seq"', 1, false);


--
-- TOC entry 2791 (class 2606 OID 16481)
-- Name: BuildingType building_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."building_type"
    ADD CONSTRAINT "building_type_pkey" PRIMARY KEY ("id");


--
-- TOC entry 2785 (class 2606 OID 16404)
-- Name: Building building_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."building"
    ADD CONSTRAINT "building_pkey" PRIMARY KEY ("id");


--
-- TOC entry 2793 (class 2606 OID 16498)
-- Name: ComponentType component_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."component_type"
    ADD CONSTRAINT "component_type_pkey" PRIMARY KEY ("id");


--
-- TOC entry 2787 (class 2606 OID 16417)
-- Name: Component component_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."component"
    ADD CONSTRAINT "component_pkey" PRIMARY KEY ("id");


--
-- TOC entry 2783 (class 2606 OID 16396)
-- Name: Location Id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."location"
    ADD CONSTRAINT "id" PRIMARY KEY ("id");


--
-- TOC entry 2789 (class 2606 OID 16483)
-- Name: LocationType location_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."location_type"
    ADD CONSTRAINT "location_type_pkey" PRIMARY KEY ("id");


--
-- TOC entry 2795 (class 2606 OID 16503)
-- Name: UserLocation user_location_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user_location"
    ADD CONSTRAINT "user_location_pkey" PRIMARY KEY ("id");


--
-- TOC entry 2798 (class 2606 OID 16519)
-- Name: Building building_building_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."building"
    ADD CONSTRAINT "building_building_type_id_fkey" FOREIGN KEY ("building_type_id") REFERENCES public."building_type"("id");


--
-- TOC entry 2797 (class 2606 OID 16514)
-- Name: Building building_location_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."building"
    ADD CONSTRAINT "building_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES public."location"("id");


--
-- TOC entry 2799 (class 2606 OID 16418)
-- Name: Component component_building_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."component"
    ADD CONSTRAINT "component_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES public."building"("id");


--
-- TOC entry 2800 (class 2606 OID 16524)
-- Name: Component component_component_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."component"
    ADD CONSTRAINT "component_component_type_id_fkey" FOREIGN KEY ("component_type_id") REFERENCES public."component_type"("id");


--
-- TOC entry 2796 (class 2606 OID 16509)
-- Name: Location location_location_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."location"
    ADD CONSTRAINT "location_location_type_id_fkey" FOREIGN KEY ("location_type_id") REFERENCES public."location_type"("id");


--
-- TOC entry 2801 (class 2606 OID 16504)
-- Name: UserLocation user_location_location_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user_location"
    ADD CONSTRAINT "user_location_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES public."location"("id");


-- Completed on 2019-06-17 15:12:54 UTC

--
-- PostgreSQL database dump complete
--

