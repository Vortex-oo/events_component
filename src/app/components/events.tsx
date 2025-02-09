
'use client';

import React from 'react';
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Events() {

  const [showFirstImage, setShowFirstImage] = useState(true);
  const containerRef = useRef(null); 

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); 

    tl.to(".image1", { opacity: 1, duration: 1 })
      .to(".image1", { opacity: 0, duration: 1 }, "+=0.5") 
      .to(".image2", { opacity: 1, duration: 1 })
      .to(".image2", { opacity: 0, duration: 1 }, "+=0.5")
      .to(".image3", { opacity: 1, duration: 1 })
      .to(".image3", { opacity: 0, duration: 1 }, "+=0.5")
      .to(".image4", { opacity: 1, duration: 1 })
      .to(".image4", { opacity: 0, duration: 1 }, "+=0.5")
      .to(".image5", { opacity: 1, duration: 1 })
      .to(".image5", { opacity: 0, duration: 1 }, "+=0.5")
      .to(".image6", { opacity: 1, duration: 1 })
      .to(".image6", { opacity: 0, duration: 1 }, "+=0.5");


    return () => tl.kill(); 
  }, []);

  return (
    <div>
      <div>
        <div className="font-misteri  text-4xl text-center min-h-screen bg-cover bg-fixed bg-center bg-no-repeat overflow-x-hidden"
          style={{
            backgroundImage: "url('https://utfs.io/f/78bcd192-6b8d-4998-8443-452f103ecab5-j7rycq.png')",
          }}>

          <div className="first_part text-white text-start px-4 md:px-24 py-10 md:py-28 h-auto md:h-screen">
            <h1 className="text-glow text-5xl md:text-9xl mb-8">Exciting Events</h1>

            <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-20'>
              <div className="w-full md:w-1/2">
                <p className="font-ameda text-base md:text-xl pt-4 md:pt-9 px-3">
                  Enter a realm where creativity knows no bounds! Ecstasia, the long-awaited cultural extravaganza, is poised to enchant at the heart of the University of Engineering and Management, Kolkata. This annual celebration isn't just an event; it's a tradition that sets our campus ablaze with excitement.
                  Enter a realm where creativity knows no bounds! Ecstasia, the long-awaited cultural extravaganza, is poised to enchant at the heart of the University of Engineering and Management, Kolkata. This annual celebration isn't just an event; it's a tradition that sets our campus ablaze with excitement.
                </p>
                <div className="relative top-8 mt-6 md:mt-0 md:bottom-10 left-0 md:left-4 z-20">


                  <button className="relative px-6 py-3 text-base appearance-none border-0 bg-transparent text-white font-medium rounded-lg overflow-hidden after:content-[''] after:absolute after:inset-0 after:shadow-[inset_0_0_0_2px_rgba(255,255,255,1)] after:rounded-lg after:mix-blend-overlay">
                    <iframe
                      src="data:text/html;base64,PGh0bWw+CiAgICAgICAgICAgIDxoZWFkPgogICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIj4KICAgICAgICAgICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgICAgICAgICBodG1sLCBib2R5LCBpZnJhbWUsIGNhbnZhc3sKICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgPC9zdHlsZT4KICAgICAgICAgICAgICAgIDxzY3JpcHQgdHlwZT0ibW9kdWxlIj4KICAgICAgICAgICAgICAgICAgICBpbXBvcnQgUmVhY3QsIHt1c2VSZWZ9IGZyb20gJ2h0dHBzOi8vY2RuLnNreXBhY2suZGV2L3JlYWN0QDE4LjAuMic7CiAgICAgICAgICAgICAgICAgICAgaW1wb3J0IFJlYWN0RE9NIGZyb20gJ2h0dHBzOi8vY2RuLnNreXBhY2suZGV2L3JlYWN0LWRvbUAxOC4wLjInOwogICAgICAgICAgICAgICAgICAgIGltcG9ydCB7Q2FudmFzLCB1c2VGcmFtZX0gZnJvbSAnaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvQHJlYWN0LXRocmVlL2ZpYmVyQDcuMC4yNCc7CgogICAgICAgICAgICAgICAgICAgIGNvbnN0IFRleHR1cmVNZXNoID0gKCkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNoID0gdXNlUmVmKG51bGwpCiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUZyYW1lKHN0YXRlID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY2xvY2ssIG1vdXNlLCBnbCwgc2NlbmUsIGNhbWVyYSB9ID0gc3RhdGUKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1lc2guY3VycmVudCl7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfbW91c2UudmFsdWUgPSBbbW91c2UueCwgbW91c2UueV0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNoLmN1cnJlbnQubWF0ZXJpYWwudW5pZm9ybXMudV90aW1lLnZhbHVlID0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ21lc2gnLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjptZXNoLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwwLDBdLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAxLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBbMCwwLDBdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGxhbmVHZW9tZXRyeScse2FyZ3M6WzEwMjQsMTAyNF19KSwgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzaGFkZXJNYXRlcmlhbCcsewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgCi8vIFVOSUZPUk1TCiNkZWZpbmUgTlVNX0xBWUVSUyAxMC4KCnVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247CnVuaWZvcm0gdmVjMiB1X21vdXNlOwp1bmlmb3JtIGZsb2F0IHVfdGltZTsKCgp1bmlmb3JtIGZsb2F0IHVfc2NhbGU7CgoKbWF0MiByb2F0KGZsb2F0IGEpewogIAogIGZsb2F0IHMgPSBzaW4oYSk7CiAgZmxvYXQgYyA9IGNvcyhhKTsKICByZXR1cm4gbWF0MihjLCAtcywgcywgYyk7Cn0KCmZsb2F0IFN0YXIodmVjMiB1diwgZmxvYXQgZmxhcmUpewogIAogIGZsb2F0IGQgPSBsZW5ndGgodXYpOwogIGZsb2F0IG0gPSAuMDUvZDsKICAKICAKICBmbG9hdCByYXlzID0gbWF4KDAuLCAxLiAtIGFicyh1di54ICogdXYueSAqIDEwMDAuKSk7CiAgbSArPSByYXlzKmZsYXJlOwogIAogIHV2ICo9IHJvYXQoMy4xNDUvNC4pOwogIAogIHJheXMgPSBtYXgoMC4sIDEuIC0gYWJzKHV2LnggKiB1di55ICogMTAwMC4pKTsKICBtICs9IHJheXMgKi4zKmZsYXJlOwogIAogIG0gKj0gc21vb3Roc3RlcCgxLiwgLjIsIGQpOwogIHJldHVybiBtOwp9CiAgICAKZmxvYXQgSGFzaDIxKHZlYzIgcCl7CiAgcCA9IGZyYWN0KHAqIHZlYzIoMTIzLjM0LCA0NTYuMjEpKTsKICBwICs9IGRvdChwLCBwKzQ1LjMyKTsKICAKICByZXR1cm4gZnJhY3QocC54KnAueSk7Cn0KCnZlYzMgU3RhckxheWVyKHZlYzIgdXYpewogIHZlYzMgY29sID0gdmVjMygwKTsKICAKICB2ZWMyIGd2ID0gZnJhY3QodXYpLS41OwogIAogIAogIC8vIGNvbC5yZyA9IGd2OwogIAogIHZlYzIgaWQgPSBmbG9vcih1dik7CiAgCiAgZm9yKGludCB5PS0xOyB5PD0xOyB5KyspewogICAgZm9yKGludCB4PS0xOyB4PD0xOyB4KyspewogICAgICB2ZWMyIG9mZnMgPSB2ZWMyKHgseSk7CiAgICAgIAogICAgICBmbG9hdCBuID0gSGFzaDIxKGlkK29mZnMpOwogICAgICAvLyBjb2wgKz0gU3Rhcihndi1vZmZzLXZlYzIobiwgZnJhY3QobiozNC4pKSsuNSwgMS4pOwogICAgICBmbG9hdCBzaXplID0gZnJhY3QobiAqIDEzNDUuMzIpOwogICAgICBmbG9hdCBzdGFyID0gU3Rhcihndi1vZmZzLXZlYzIobiwgZnJhY3QobiozNC4pKSsuNSwgc21vb3Roc3RlcCguOSwgMS4sIHNpemUpKi42KTsKICAgICAgCiAgICAgIC8vIHZlYzMgY29sb3IgPSBzaW4odmVjMyguMiwuMywuOSkqdV90aW1lKTsKICAgICAgdmVjMyBjb2xvciA9IHNpbih2ZWMzKC4yLC4zLC45KSpmcmFjdChuKjIzNDUuMikqMTIuMjgzKSouNSsuNTsKICAgICAgCiAgICAgIGNvbG9yID0gY29sb3IqdmVjMygxLiwuNSwxLitzaXplKTsKICAgICAgc3RhciAqPSBzaW4odV90aW1lKjMuK24qNi4zMjMpKi41KzEuOwogICAgICBjb2wgKz0gc3RhcipzaXplKmNvbG9yOwogICAgfSAgCiAgfQogIHJldHVybiBjb2w7Cn0Kdm9pZCBtYWluKCkgewogIHZlYzIgdXYgPSAoZ2xfRnJhZ0Nvb3JkLnh5IC0gLjUgKiB1X3Jlc29sdXRpb24ueHkpL3VfcmVzb2x1dGlvbi55OwogIAogIHZlYzIgTSA9ICh1X21vdXNlLnh5IC0gdV9yZXNvbHV0aW9uLnh5Ki41KS91X3Jlc29sdXRpb24ueTsKICAvLyB1dio9MTAuKnVfc2NhbGU7CiAgCiAgdXYqPSgzLip1X3NjYWxlKS0uNTsKICAKICBmbG9hdCB0ID0gdV90aW1lKi4wNTsgCiAgLy8gdXYgKz1NKjQuOwogIHV2ICo9IHJvYXQodCk7CgogIHZlYzMgY29sID0gdmVjMygwKTsKICAKICBmb3IoZmxvYXQgaT0wLjsgaTwxLjsgaSs9MS4vTlVNX0xBWUVSUyl7CiAgICAKICAgIGZsb2F0IGRlcHRoID0gZnJhY3QoaSt0KTsKICAgIGZsb2F0IHNjYWxlID0gbWl4KDIwLiwgLjUsIGRlcHRoKTsKICAgIGZsb2F0IGZhZGUgPSBkZXB0aCpzbW9vdGhzdGVwKDEuLCAuOSwgZGVwdGgpOwogICAgY29sKz0gU3RhckxheWVyKHV2KnNjYWxlK2kqNDU1LjIpICpmYWRlOwogIH0KICAKICAKICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbCwxLjApOwp9YCwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGAKICAgICAgICAgICAgdm9pZCBtYWluKCkgewogICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTsKICAgICAgICB9YCwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlmb3JtczogeyJ1X3NjYWxlIjp7InZhbHVlIjowLjMwNn0sInVfdGltZSI6eyJ2YWx1ZSI6MH0sInVfbW91c2UiOnsidmFsdWUiOlswLDBdfSwidV9yZXNvbHV0aW9uIjp7InZhbHVlIjpbMTAyNCwxMDI0XX19LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpcmVmcmFtZTogZmFsc2UsIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpcmVmcmFtZUxpbmV3aWR0aDogMCwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXRoZXJpbmc6IGZhbHNlLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYXRTaGFkaW5nOiB0cnVlLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdWJsZVNpZGVkOiB0cnVlLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsc2xWZXJzaW9uOiAiMTAwIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkKICAgICAgICAgICAgICAgICAgICAgICAgKTsgIAogICAgICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAgICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FudmFzLHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsOiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2UsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IHRydWUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbjogImhpZ2hwIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3dlclByZWZlcmVuY2U6ICJoaWdoLXBlcmZvcm1hbmNlIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRwcjogWzIsMl0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmE6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3Y6IDc1LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lYXI6IDAuMSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXI6IDEwMDAsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFswLDAsNV0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTp7IGhlaWdodDogNTEyLCB3aWR0aDogNTEyIH0KICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0dXJlTWVzaCkgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICApLCBkb2N1bWVudC5ib2R5KTsKICAgICAgICAgICAgICAgIDwvc2NyaXB0PgogICAgICAgICAgICA8L2hlYWQ+CiAgICAgICAgICAgIDxib2R5Pgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvbHlnaWEuZjc0OTA1OTQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2FkZC5hNTUyNDBkZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvYm9vay41ZmIxMWI4ZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvY29kZS40MjhiMThmNS5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvb3ZlcmZsb3cuOGQ1MDQxNWQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2Nsb3NlLjY0YjgwZDAwLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy90cmFzaC41MjRkYmNkMy5zdmcgLS0+CjwvYm9keT4KICAgICAgICA8L2h0bWw+" style="border:0;margin:0;width: 512px;height:512px;"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 rotate-15 opacity-50 blur-sm transition-all duration-500 ease-in-out hover:scale-50 hover:opacity-100 hover:blur-none"
                      style={{ border: 0, margin: 0, width: '512px', height: '512px' }}
                    />
                    <span className="relative z-10 opacity-75 text-white text-2xl transition-all duration-500 ease-in-out hover:opacity-100 font-ameda">
                      View More
                    </span>
                  </button>
                </div>
              </div>

            
              <div className="w-full md:w-1/2 relative group cursor-pointer mt-4 md:mt-0" ref={containerRef}>
      <img
        src="https://utfs.io/f/6b51eed0-80ee-4488-82ef-87312223bcb8-l38e2y.png"
        alt="chakra"
        className="w-72 md:w-96 relative mx-auto"
      />
      <img
        src="https://utfs.io/f/2486b0b2-3182-466b-96f0-d7a62c29b936-htt2hq.png"
        alt="image1"
        className="image1 w-48 md:w-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
      />
      <img
        src="https://utfs.io/f/34f2fe9c-6a85-438e-abaa-9f2af4ce1b83-xs9ewn.png"
        alt="image2"
        className="image2 w-48 md:w-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
      />
      <img
        src="https://utfs.io/f/d7af521c-576f-405d-b419-8f41dbce830f-yn114j.png"
        alt="image3"
        className="image3 w-48 md:w-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
      />
      <img
        src="https://utfs.io/f/b232489e-d8ee-4118-8773-f5271194fd57-1rd4ri.png"
        alt="image4"
        className="image4 w-48 md:w-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
      />
      <img
        src="https://utfs.io/f/410ae0b8-413d-4a36-b261-960db15f7983-1ta7w4.png"
        alt="image5"
        className="image5 w-48 md:w-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
      />
      <img
        src="https://utfs.io/f/0b68f71e-677b-40a5-806f-22acc9a3f4ec-2qr.png"
        alt="image6"
        className="image6 w-48 md:w-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
      />
    </div>

            </div>
          </div>

          <div className="second_part text-white text-4xl md:text-7xl">
          <div className="relative w-full px-4 py-8 flex flex-col items-center">
              <img
                src="https://utfs.io/f/90986ca3-a3d4-45d7-961b-b9530eeee6a4-dlckvb.png"
                alt="tree"
                className="absolute  w-auto object-cover mx-auto z-0 md:mb-8"
              />
              <h1 className="text-glow text-center absolute w-full top-20 md:top-80 z-10 text-5xl md:text-9xl">Timeline</h1>





              <div className="flex flex-row items-center justify-center gap-16 md:gap-96 mt-60 md:mt-[58rem] z-20">
  <button className="date-btn">8th March</button>
  <button className="date-btn">9th March</button>

  <style jsx>{`
    .date-btn {
      border-radius: 11px;
      padding: 12px 24px;
      width: 250px;
      height: 100px;
      font-size: 40px;
      font-family: ameda;
      line-height: normal;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.95);
      text-align: center;
      border: none;
      position: relative;
      cursor: pointer;
      appearance: none;
      background: radial-gradient(
        var(--spread-x) var(--spread-y) at var(--pos-x) var(--pos-y),
        var(--color-1) var(--stop-1),
        var(--color-2) var(--stop-2),
        var(--color-3) var(--stop-3),
        var(--color-4) var(--stop-4),
        var(--color-5) var(--stop-5)
      );
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.95);
      outline: none;
      -webkit-tap-highlight-color: transparent;
      transition: all 0.5s;
    }

    @media (max-width: 768px) {
      .date-btn {
        width: 130px !important;
        height: 50px !important;
        font-size: 20px !important;
        padding: 6px 12px !important;
      }
    }

    .date-btn:hover {
      --pos-x: 0%;
      --pos-y: 91.51%;
      --spread-x: 120.24%;
      --spread-y: 103.18%;
      --color-1: #c96287;
      --color-2: #c66c64;
      --color-3: #cc7d23;
      --color-4: #37140a;
      --color-5: #000;
      --border-angle: 190deg;
      --border-color-1: hsla(340, 78%, 90%, 0.1);
      --border-color-2: hsla(340, 75%, 90%, 0.6);
      --stop-1: 0%;
      --stop-2: 8.8%;
      --stop-3: 21.44%;
      --stop-4: 71.34%;
      --stop-5: 85.76%;
    }
  `}</style>
</div>




            </div>
          </div>



        </div>
      </div>
    </div>
  );
}