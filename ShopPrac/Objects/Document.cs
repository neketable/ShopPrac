﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ShopPrac
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Документ.
    /// </summary>
    // *** Start programmer edit section *** (Document CustomAttributes)

    // *** End programmer edit section *** (Document CustomAttributes)
    [AutoAltered()]
    [Caption("Документ")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("DocumentE", new string[] {
            "Number as \'Number\'",
            "CreateDate as \'Create date\'"})]
    [View("DocumentL", new string[] {
            "Number as \'Number\'",
            "CreateDate as \'Create date\'"})]
    public class Document : ICSSoft.STORMNET.DataObject
    {
        
        private int fNumber = 1;
        
        private System.DateTime fCreateDate = System.DateTime.Now;
        
        // *** Start programmer edit section *** (Document CustomMembers)

        // *** End programmer edit section *** (Document CustomMembers)

        
        /// <summary>
        /// Number.
        /// </summary>
        // *** Start programmer edit section *** (Document.Number CustomAttributes)

        // *** End programmer edit section *** (Document.Number CustomAttributes)
        [DisableInsertProperty(true)]
        [NotNull()]
        public virtual int Number
        {
            get
            {
                // *** Start programmer edit section *** (Document.Number Get start)

                // *** End programmer edit section *** (Document.Number Get start)
                int result = this.fNumber;
                // *** Start programmer edit section *** (Document.Number Get end)

                // *** End programmer edit section *** (Document.Number Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Document.Number Set start)

                // *** End programmer edit section *** (Document.Number Set start)
                this.fNumber = value;
                // *** Start programmer edit section *** (Document.Number Set end)

                // *** End programmer edit section *** (Document.Number Set end)
            }
        }
        
        /// <summary>
        /// CreateDate.
        /// </summary>
        // *** Start programmer edit section *** (Document.CreateDate CustomAttributes)

        // *** End programmer edit section *** (Document.CreateDate CustomAttributes)
        public virtual System.DateTime CreateDate
        {
            get
            {
                // *** Start programmer edit section *** (Document.CreateDate Get start)

                // *** End programmer edit section *** (Document.CreateDate Get start)
                System.DateTime result = this.fCreateDate;
                // *** Start programmer edit section *** (Document.CreateDate Get end)

                // *** End programmer edit section *** (Document.CreateDate Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Document.CreateDate Set start)

                // *** End programmer edit section *** (Document.CreateDate Set start)
                this.fCreateDate = value;
                // *** Start programmer edit section *** (Document.CreateDate Set end)

                // *** End programmer edit section *** (Document.CreateDate Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "DocumentE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View DocumentE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("DocumentE", typeof(IIS.ShopPrac.Document));
                }
            }
            
            /// <summary>
            /// "DocumentL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View DocumentL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("DocumentL", typeof(IIS.ShopPrac.Document));
                }
            }
        }
    }
}
